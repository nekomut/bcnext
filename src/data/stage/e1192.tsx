// Stage 1192 Data
import type { StageData } from '../../app/stage/types';

export const e1192Data: StageData = {
  eventId: 1192,
  eventName: "雛壇の戦士達SP",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 192,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "雛壇あるあるもっと言いたい",
      baseHp: 150000,
      width: 3600,
      enemyLimit: 12,
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
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "3",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 7800,
            actualAp: 480,
            actualDps: 600.0,
            magnification: "600%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 900,
            actualDps: 870.97,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 1200,
            actualDps: 356.44,
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
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "明かりをつけましょ爆弾に～",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 12,
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
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "067",
          enemyName: "クマトーク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMEBAQGBgYGBgYHBwcJCQkJCQkMDAwXFxcfHx8lJSUmJiYnJycvLy8xMTE4ODg4ODhAQEBERERFRURJSUlNTU1PT09VVVVdXV1hYWFkZGRoaGhubm5ubm50dHR5eXl6enqAgICBgYGIiIiSkpKampqbm5uhoaGpqamvr6+wsLC5ubnExMTLy8vT09PZ2dng4ODo6Ojv7+/29vb8/Pz///////9Y6zNdAAAAQHRSTlMACXXC0+Hp9Z//SDWyHBBdhyczkk9x/qZfw3zarf+R78j+o9j/tv7///DO/////+X///D///7//////////wD/N+kOJwAABxdJREFUWIXtV2tb6rgWtlvdukVQFNl4qVgoTaFJSMylze30//+rWSkKxfE5M+eZ+XjihV6y3qz3XZeEk//8w3Hyf4B/AeB/Gslw2H2OJrPx37RIdh/jQbxInjabSfx8fVeL0X81HHWvk8nidbwz3D4Bwt3W28XdZDZ7s271LcDdbNItOVmt7uLt1tavo/F4sHGdwd02uPVWaS3d++xb+039PkuSZLixZgFIk/dgnt+W2+Vc4PtRdF15adq21VQ9fQcw0615eV2tVmv3Hl0evuEqK/MyR3lxPYAJT41JuTcNK8y3FO62zgrjgjdmGymc3HOVSs5IldWPADBaeS84Tacl17sJX0byahrUtG3AqHNx9MIVqvJsmhVkCWqOt14KY0laG76efKf9yjdIKYIJt9HF8bYmWKpsKhVd30WKWgitWcW5JLffUgiNEGw6ZVJsYMWZqoW0hiMtZHVzkizgmjOhjWScP34jwkw3XHnHkNVyfRUNFOeUAQzl5D4B/NbXKo7GufnVnyVYWCEZY1wwKsuH6FD0SEoplDHPg9cYwY8RQnmffMPASS6kVkIo/Th8beJM75wPbevze3Dg0xwAyHL4FeApBsAZGC60dv6wCb0VPZ7rvTUgBrb9Gofxxh8MWlc+695tGyjRtepIOEG4D1x+TcbZkYGrUFNzKhrFG1gUVhQlk8SGEKSwQgVeb47jkCxc599ueIGrIiuKPKOKdC+YrlzgED9eSc914Ob9mMMYNHLu04GGeQcQCCHCq+g4GJAaFm+sNaYhQMGY1+QrA1n3ARChEFSGaYgUuJXYSw6XNpfMAEDYjI8YWJjUfAJ4Kj0h2lhFFAsdBatkIMhowasaLplp1ewLA0/3FFpRu4x62/DcMBsTh1neBM1F9iuFXGGe2tb2OUwULEv2AJ458Jel04JroTqXDHNKNKHJuZOstNS3vh+HmEWO7DPBMA+zLUuVEZjHsNKaW6oo5DqFTM91VGY7PpIAJu0BZCxEpTlUrmBVVI4SbDTcKcgMLvOKwsNeIKEVhB6AZ8aAJd9VbgHgBiNMZNPUdQORpHlKAKA+JOMwJv6BQgPhcprjCheF9IWAJ7lQtMLSwDxDqypjMM0ukiOAvYi7eNqyyNOswAFXvtWFaz00I8y1im0Ks1hUh9Y63nYFY/cSRgCE8izPaWC4aXnkDP2EgVdEhppFumGzL+nxe7dw/SlhV7UiZ6CbaTmDFIJEdSB8UAjr0NaCxeLfHgN0hl3MISsjJbPTBPLGYmDAY2cxFfgDAEq23h4A7jqAmn8wCK1Rh9IWNSHwyO5YYAIAjXDEyeXb8EgDiBUsaU10RMseQCNT/QkPJWKiB4GyzeDqOAqtBanbhiLQUuq+BzY+0mIHECkAfv380Kul0cZ5b81cA/cm5giv+x508qroVAi02jnoV/2umiyofF+q5wwzF1cKrDkAQFbU4gMAPKh0J3c43h4ffi9Xk+WakEJ2QWSHTSBexyzfARhCTXSqPW4HJ6Ph5CYZTN4e5+suwj2A2Ca6/vEBQGLrgdfmmzNCsnhZvuT2K4DvRN2J2Dobdq/d4k97Uwdw8+zafneLNRai9UeW7JS0R4l8BDBZxvzrRaFLIEgu23XXg1PtN4eMD4Cwz+o4Ym1HFf2h39iYce37180tSUYA8LCMC9ViD6Ci6+B0T5c6j4V/FIZk8nB7/7Jar6s1DjuXP/i2nLS7xOAQ/GA97MC8A6j7AKM3jjHBFalQbIGtw1HKuKP4sgq71OQs7nnUep5BpEItjwA2TjdOFojhWBCtryAMBvZAQ1NADJbDfopiExEaNExlbebz+8G4BwCHO1+X2NWxhwaPIG2CIS7UWdl4lRWZZBkVdRBQzjK2OlRk8+cegK1ro1ElWKa1pbZAqvHQiHzAec4rsEA5xmXpSFp6kqY5PCBldgBY1RKaeFHAvBzxnJSUVMIVufRommdpluZ5hgqUabBSpdBViZiTfQDFheYgIxxv86zMctjdS5PnZZPlZSloUSJlMBx7iQQ6Gi5LrGjW16A2XtdOK4vzgqCyLBWhOSoJ/FEH5JBswCojBGVFWcEEcLcP4BpjjY1S0kI5ikpsQTqE84jFwLRE8FMiIImKfPd//rtHwaraavgFBQuqwAAR3BnsrIpivV4u395eXl6fHh6WcGKVgvbO7KMXRoUSEk6ihsDJBlaDfSXPsvl8/vz4+Pv+9uHmajAYDkfxa9BoBTuvEvyjoJPRcHB1ez3HFYwSZWmaTmH8iuPi4uLnz/Pz8zMYp6fX15eXt7c/bm7u10IxvIFyTAY3t9enZ+c/Ly6mcEgFt/JffzUA9OLXFBa5hO9ig9OL/QsE2w0j078EOCCdwRl+8ONy5wA8SMH9v2UPvM7PTi9/XI0+JRhc3fy4vby8vj49PTs7j+Pn0ege7VUAEa4GICcY/wGaBGgpyeobSQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2800,
            dps: 831.68,
            speed: 35,
            range: 400,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 101,
            foreswing: 15,
            backswing: 86,
            tba: 0
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 7000,
            actualDps: 2079.2,
            magnification: "250%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 1800,
            actualDps: 534.66,
            magnification: "150%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "１ボケ総ツッコミ",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 12,
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
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 12000,
            actualDps: 3364.44,
            magnification: "1200%",
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
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "3",
            spawnTime: "7.0s",
            spawnTimeFrames: "210f",
            delay: "10.0-15.0s",
            delayFrames: "300-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEDAQQDAwQFBAcIBAkHBgkIBQoIBQsLBw8MBxEMCBANCBIOCRMPChQQChYRChcRChcXDh8cESUhGCYlFjElFjIlGi0mHywqHzAuGz00JEEvLy8+JVM/J1M+LUZHKl5MMWRTM29ZNndQRVheOX1lPYZxRZdiVmt7SqSESrBxYXyJULePVsCYW8yDco2gYdanZOCvau2ciae1b/a5cf6onq/HqtrSvd/nwv7j4+P///9OYQPHAAAAQHRSTlMABQ8aIys2QFdK/2XX4HKD6JmPw6Sv7bn/xtL3nP/q/6/h1f/2/+T+//P+/f/+/////////////////v/+//8AUeTCTAAABJBJREFUWIXtlm93ojoQxgsottpKVVCka7OKLJAITdIkBnW73/9b3YQ/itpue8+9L/uco0bI/JjMTCbc/PmPuvkGfAO+Ad+A/w3woQy7Z35893MZvXkwuCCYdtf4MsAcQRzctuebvR8r1/oyoBtQmQe9E8EcrjBbdb8MuF0KKZHXaf4bgyUt+NcBxiCVhRSpY5od+05rhguJZ73OFyNrDBWgKOhy6MxXv5SWTzCLwudgPv5LcgzTsizTMAw1ctYaUJDnp4xLJUYgABmj+ToYdLvv+mH2hmNvNnMdZzgYjANAFEFKHLGikiARwBRn8DlQftimaVptjmGPlykmVM9I0zSjWYQoE4XkQrtSflgESZ5lMQDgKfA8dzYZHYNq3M0RL52WUgiVADUdwYyXz+aElbdUVDnOIdB0mIcA4XTU2PfmsHZVcsxKiEJVZiQMI1zUCE4hFJQSSCAVgq1qgOXGeQMQlDOMc0xF/T9K9ttYFE0oaMaBDynnJI7wssn6MsPVCrQFwbkWqVYvos3bLuENQF0QUb8PJV30QRbUDnioWaYSq+zz2ieZgU2Cjnf1FYoiQJEf4XRcOXD7i8tmhpS0ts9pdU1giEUbUHrJKRF4XmbB6Koybd1rHGii8rHwrNydHTdtPaAF4O3J8vilvax++crWFeissWwD6hjWQTxKVYOQx1LhjFGMAg24WyHYnirqGOBzB3DogyiOoVYchSDZbDYPumdZI4TisxgLUj6/bS8Louo3BGBRSv3627e3w1y3i96SnwOUh4xSfh52Hi7CtsB0sz/sdBL0xkfwL5GulPmhcqCxXoDpePzz5w+9gs4MZuvPAKoafW1WA9QivI7azqbumF3XdbxUfkJgi/6i3/crwsIHj6d+bVimOfgUkPdLVXHwF2By1t6NzwBSqt3jK4BfA57G5r8C6BWcAECt4O6yAxdllX6Iwf1adQgmnWuAlJzL9wlSxrW9X+dgdN6UjdtUmXJyXrtF0bgkBTj34Mm5OGPv1DFWsHe2r/JKtzKukphskjBKEl3N/nR4AbCXXPfSq64hKcZEEchis92+bvf77etGOXDtQWfOyqddhKDqDKzg8ct+uz38/r1LXne77Yvvz86DeGPNcr17rkKot6XqtWhz2O+U/f41Oby9ve3CxdSx9AF4lDmK1Ux2RVAdXnF5vPuttUt8oHrAJgGh/+iNRuOh3TCM4fqqgZxENgdtv09idfCVwhlSXQWlc/uUhixTJ4l8txAqwOElvopROmgA3QDpHqRa3bW9ZHB3OOxfo+senTnHIHhQLYFIGpOLTOpkEvjyksRUXN4Rv25vzoJAJY8WkNWNt1oOpbrDoQixqxyT9PQGdWMHCKuESRb7ABLGRSl1yEaRfrB6zYghKuOke36GEEqXM6f11mi5sOrCgqwnQVQrnN5PnmkVCPTgPoBa04k3GvasdjmqliCa0A6dlBItvB7bXTevrtOZ7SJWKpvYlnlRzEYvyEiltTt6xs1wMPDWqFQ8GbrN0LOv3rGMO+/h8XE6nT5OHx/u9UBLDe/V5UpqrL4e1M+955zeYP8B5fii7LIX0E4AAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4000,
            actualDps: 2105.26,
            magnification: "100%",
            count: "3",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            },
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3600,
            actualDps: 2037.74,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "31.7-36.7s",
            delayFrames: "950-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 6428.57,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQECAgIDAwIEAwMEAwQFBAMFBAQJCAcPDQ8RDQocEg4mISYuJSkwKjIzKDw3KigyQV5PPV1JRUKEMRAKXppSUVJbX2B1VFe7Rgp8TKd3bRAJgtNqbnHiTAKUby8Fl/t3d3eYXMv+VABVjKCVgVSIh4isaejMiQuok1e5cPyNnp22pm32mQv7mgj4nwKsrKx9wcr9rAv9sxDWwFi9vbyP29P7yw3My8n/4wb6206e9efh4eH9/f3///95AqAfAAAAQHRSTlMA3P/wDWU2hE6pJMP+ROX+g2LQ/p7+/8H94v7/E//9/////////9z//zj////okG8O//9Bqv///x7/CbH///8Ad5waqwAABr9JREFUWIWll4t2ojoUhlvEG6BUEY0wooIYa9N2wozYdBrO+7/V+XdQWy9nrek6uxVZkP1l38G7f/6n3H1PnE6z9U2Vr2I33YbnOt/Yr9ezv6g77YZlWY3O323mtHqj9Xo9GAzs4+7YHgCr27T/S6XVbLebrQFtO5hG091usQ3n0cDcbt1bR7m/GQb7YTq9JxODbNq7syer+UJvw0W4ugG4GQVn+LTx6bafxYO73jTa7nbRHBKOjMV217KMB57VvulBsx8Hvh/QodG0J7vdDuavVmEYLYwJtmt5IemHXvdWDMhCP87iOIhj/77zvNtG0CWZL4wJrYbl+TDR82670CTvGdSDOAus7noxjxacecF2EdU+tC1faMWCkvuNW0HsNGBAwgOP8SzzG9Mo2qpKJ1JLHjYpRK4lZFlyrqS8WQmIUSB1pZiqVOp7iygqhRRSCsFDt3Nnt+EhF1IpwRPvALBbzpdoDOJEK0lKigd+OJ9HWC/hwTxyHdvUoOcHCDFS0azz1my73ZM3zmSTpRxGijTL4n60Wq3mc/pfraI+1bC32C4W+FAqTRqcZrfv++7Rg4fs6elpQ4Lv2CfFo8zDLvb3trvtFh+/LsVWrw113+8fYziNnz4lC6IzAHb1WOCRJCIgE3qu5yOr/e6hqJxhnJ0BQqpBZNK4EoaWJ6vSQw0EquLANQLCuO1Op3VwIPgK2KQFEgHh+xS+zKOIACoRZSm1StghlBaCe8hCbxpvnrITIis+crLa83NmAHPPCrQuq6rSQrGEJ8AT4JhEe0TKXwAJ81kuigILIwKsQiuoSqYBSDVniV+31QnQy8iBTycCC1t/fHzsmfBDA4g8XqEmGbzQJZNB3ZhHgD3aUArijfHfAMQ+KQRkn9eAuV9KVCFjKLWSq7QGdE8R+ARk5EjsQ1sGPiHgQoTPwgA4L0UpuBINAzjOhYdNdgRs4hhfcS7QFjJRpUwJgIrcalPk6AShErk2lX2oaEwv2jfbxChCALKnTZBzNJFUkgtyAYAInVmizmWpqiphIzOfj13tTJ9okGwOLiCfPgVAUicWuY8UzOfb6ouIoXNH3XUMQQfq6J+sDiKEjcf5/sPIniENGMyqVkUgkEq5xkSyO+1jIzbJ7w1cOKQxG49nTBhCIdg4mIeYzzVA7rYEkL2zUdLDGKutrwHxDARZwn6MIJxHIXmgiaEWgjBqdAZAI9WAuh834+VsvMxpOHGdAxD2yQOyvSp3BqDXZ1PVfqgBmxqQzZbL8WwmKh6GfDYbz/oueSC+uKDLwbkJo08A0kEAWMEBGJM3Y9dsSwDME2OMHp0/GZx6HMXmMF6SBfjjoT8jC2Z9tKEmgMbDqvbm+eLJ0IupjjATMuSAAEtShQEzsJZjdQ6AQerch7vWcDh9GDJM7A15MCMIvpaGtZxdA/R5HjDgew92azCa9uMvgP0RIA6ASlAQNYVkcvV4pAu9ySQIlifA8gBY5keA2srD6frmEx6A0fATUBSH0/yYxkrpA+AyiueA5acFBjAjgNK1KEmz8TKKl4DZ8VhbgMhxPBn9lKeB8M1wfbgMgW07zmA6nNQAo5ubmiyKgsNoyaRkXPBUBiYhl2kYTZBJDsmhUOCQz/KPYpYnCZqqoMwLrWWJOcWTWwDnGa7JNE0TRoMwFRgFNA72LKcvAqRaYR5iyjBJg+EKUGFoiaQsUzMHSE0UH/s8EAagVYmBrCrBMdG40NNht+ecAyjAIlGqBtBT4QNDZR9gNuWM81QggOhQvH8kAWNJwthZQwGANPEkTRnmiChwhCJ2x0LBoJAyABKdYkYkJEKm54A1Bn7JEQTGUtznPEmgLPaMtsOVVHKC40yUCsuUTq8tUCVVCSEYlqQFQAXOhEZ0uS5xiYOAdJqz5BJAQpMPkdTYDfsAlOAMDyJooALShLj1EUG4BJSajFBaJnjLgpqE3YkxpVaATKdwJ+Uop9FgcJGFtaC3BwUvxEEjrVWmE9T36OEBGpDRFs8mJdc/flxWcm8wmHCUEOcsGH6qtBy8hBxfQ+5+vj+unyHrl7efd1eCm4CjHEenF5erJe+/Xn7/+fPn9+vb+9XNH+9vL88G/3h982TB2wHwfm3B+/vbq7n58vZ+6eCXTWjN75df7zcteP1P805raBH0by6pHST6jQB9En69kv5twBsIL6+PDqR1JXQV+fjx8/Hx55W+TT/YOs32aLKe9l33HtK4ELp277rdbhe/6zomuyftVrPrkoL5PeRbfyHEc7vtTs1ouX+jc0vumwcL2saC76jChE8LDjHoNJvtbte9HYFjFFyKQh2EUwz+BdWeeTSk7mD6AAAAAElFTkSuQmCC",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 4200,
            actualDps: 1247.54,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "428",
          enemyName: "シノシシ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 400000,
            ap: 4500,
            dps: 12272.73,
            speed: 22,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4500,
            actualDps: 12272.73,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 150,
                duration_s: 5.0,
                hp_ratio: 50
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "若手芸人VS雛壇芸人",
      baseHp: 400000,
      width: 5500,
      enemyLimit: 12,
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
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 1100,
            actualAp: 6000,
            actualDps: 22500.0,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 15000,
            actualDps: 4205.55,
            magnification: "1500%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "427",
          enemyName: "クマンケン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIFBQQHBQcIBgoHBwYIBwoKCAsLCQ0NCg4OChEODBAQDBIRDBMSDRcVDhkSEhAbFCIfFCc/AD8hFiomGDEmGDAnGjErHDYrHTgzH0IzIkE4Ikk3JEQ8Jk5AJ1JBJ1NJLV9LLGJVNHBYM3ZWN3BjPIJuQJJvRZV4RKBxVoiCSa6HU7eKUbp0aH2WWct/eoKfYNinZuSuau61bvmUlJO5cf6rq6vExMPV1dXl5eTx8fH+/v5Yk42TAAAAQHRSTlMABw7TxRUlSB2ZNuItaUGAX7NU/4t3BGufwtLplbqnyf6y8NX94f/z0f7/7P////X/////////////////////pAOhpgAABGhJREFUWIWVl+ta4jAQhi1rEREQEVZADgVK2qQhhJADBcH7v6udtKALuDQ7+sP6MC+Z0zfp3d2/zK+UTn+WqvWG988P/mxecxIPakdUex7NWu6u5Wan6rUSacTEz/7Tihij44qrf2scRb3aSKWpSapeCawOABY1HAEPcwqfrluAjtrd0WQ47IeMkXHZzb8yxJgy3H5bmlTgMMSUMvghfdcstqYhYgw/VrvEaC0wZpk5p6DURSGEgN57LyQFU4TkhOjBDeAP7QFYGAQIGwAYanlwAtJ2C8EfIgDQIAiDHCBtEixh6DsBvAGBHKL+UxBwG4JJuc0CMKaPTSdE0zZNv/HwTnRqBNRS2aIgzFAw7bgAoIx0WvcaCQQgVgudqhBRtEYACNzSUO326qW7zjI9AjTFjCI4RfDuOA4l34NUSIjfSCk4eCIMtST9ZqnY+Qsy0QZSsFis16+vr+vNChPXMuRWjk2q2Xq3/9xv0Wr/edit8MxxGDJ7W6Zmsf3Yf35+HlabA2D263fXcQTzJyqV68Nu8/Gx24BtN5vDNmi6Ax4SqP9it9+u15vd4bDbbncbHD46q1peA7nYfOz3h/0eTrHGISE9V026q8V2DFLNF4vVaoEXCy55iLBrH2QpzM2AJGhjAKcUc+3EPIVXZjQPXUUlm4MfENhVVzsiH+RLo7TjFEMpj0BfIdhpTxRYXgNNrwhMJlUXQF4DQY0U6gKwfHOPgDPFmDDnAOUSw7GLGJeMyQuASRzqkEdgqJRM6IsQUlHcS143V2Mijb5MIlc6LuylSg9r28NEXvcBETopXFC1OaLQ/JpctzPlUuLCGBoRRsoC9KU/pMWIYmVsRRRj8SMADiXYvKiX3mALBMycAYz9NRageFQgbF6bMIoRl2cAbUUemCZVrCAJXtfuYhIw8l1EIziHnlQkU5bJ7fVSmmTLPAzRdxVgO0FTWoClxbfXgz/ObwM4+OoDbf25SGUGSAu6uTLLbzQMfQPsI+dQwuyxYCK/ASI9qpLKnoXhWY+ncnATUJ6fAPbjNmtGcYiBKxCkDKAmNwG1EwATm30rCEZa/9N0GBM7ASjBIOSMZ4nX4P7VWo4ARkOlOf9LURRWIntMHAFwS9PmL0UQSNhucAawaWTOBS0EgM3j8ibgq4xsOj9XJIhJcHum24BjJ9pujs4VDU+ziLS5DTjOgr1v0+MkH6d5PrNVUPPkdg7yaWRwrQuzxrMV1Nqu9/FQMQWN3OnfBgwIXNdxH0PO7Bcn4zieYa1Q+DJZ9hId10oFivIWvszovDkmoS2ZGpYr5VoMEoMGo1m1kwzgEnob0Og1unjot8ZTkNZ89LxBiBnuPDc9/7l4u3o1r9rr/PZqQwCYOHtzrEeURS24ARd9+4lRrRx3rBhkHo35f7z1ncwCdH6Auwo0R6GcXwFGtmb5kaE0zPnF9WTeQMjRyQm2zeg/7vrg7VfKbRY9Pxyt2Ufdaq1c8V0vu5X648v9+9OvL3t6+nV///JY/0HS/wBkFjcluHFpbgAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 7894.74,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 19,
            foreswing: 6,
            backswing: 3,
            tba: 7
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 5000,
            actualDps: 7894.74,
            magnification: "100%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 5000,
            actualDps: 2238.8,
            magnification: "500%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 7200,
            actualDps: 2138.64,
            magnification: "600%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "まだまだ続くよ！雛祭り！",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 12,
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
            actualHp: 137500,
            actualAp: 4500,
            actualDps: 5000.0,
            magnification: "250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "067",
          enemyName: "クマトーク",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2800,
            dps: 831.68,
            speed: 35,
            range: 400,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 101,
            foreswing: 15,
            backswing: 86,
            tba: 0
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 14000,
            actualDps: 4158.4,
            magnification: "500%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 12000,
            actualDps: 3564.4,
            magnification: "1000%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    }
  ]
} as const;

export default e1192Data;

