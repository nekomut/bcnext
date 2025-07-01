// Stage 1232 Data
import type { StageData } from '../../app/stage/types';

export const e1232Data: StageData = {
  eventId: 1232,
  eventName: "はじめてのお遣い",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 232,
  stages: [
    {
      stageId: 0,
      stageName: "ベビーフェイク 超極ムズ",
      baseHp: 1550000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1052",
          treasureName: "ネコベーカリー(553)",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 33750,
            actualAp: 4000,
            actualDps: 4285.73,
            magnification: "250%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "209",
          enemyName: "アルパッカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIEBAUEBAQKCgoOERELExMQERIZHR0hISEaJiUnJycoLC0iNDIuOjg9PT01QUA5QkE/TUs8UE0/Tk1LUlFPY2BSY2FVYmFVcW1be3djeHR1dXVchX98g4OBgYF1kYxul5FlnJOPj4+YmJhzrKNytKifn596ubClpaV8wraurq5/xru4uLi5ubmH1MeP4NPHx8eW6t3R0dGc9Obb29uh/e3n5+fx8fH6+vr///+1CE5JAAAAQHRSTlMACGueQ8dTrI0ULg4hN0L/JVTHfEyiZ8z5tIeo5sP81uyc/v233P/tz/7+8Nz++/X+/v/x+v7///z//v//////kiNXkAAABFRJREFUWIWdV1t7ojAQlXa3LYpu8YLKLRYUjQICcg0k/P9/teFaug8l3XkyfpnDzJmTyWQyYTSOFyR5KggzVod/jJcul0cAbPu4/i//mXxAhKRFWSJt/h/+3AJEMEAlNYIu4s8B1rZnmW5BjULgC/N3+18yIrjA0DBMXCDPZfV/+TVtf4o2KctU3/3ZWZYJVowAcw3sW4R3m4aeWsbOSrJI49n8Z0qSh0qz+f1CSoKh6SR5nt8WjAHcqs3zzwhK7OnXLM98xhSku+/n90Y267SsEQroZ4mxYfLnlCSJ8lBqAOIaoESqYfhnNh0IJ5pBHjXhSi1AvAGOsWEhcbbehDWAXItBRg1AqixkSWD5/vxkOlkFoMrVfqnhoCwfjDLmlRR5luNcqYApC/wRk58BLB7VqYljKn6PuvCX1p+cpuPOtADCqguZ8kZZ4OSi8ceAhYD1x+UQ9wBYm4rSpl0Te7wZcOtLQRDErQcJTPXgqQ0AKZE0/v0HDZdA2BaugBjpZkq61SgA91ETXsRB7YPdgJC4i6ckYJTEtU369GkCboVDgo4S8hg7icIRlwMA3Hy78FpUBMZIFA9DAMpF2uB0Ul5x3/uvNfgFoEwbCaZBuxy5FN6PsOijT0nPBsGICYD7QLCXIIlx+QlRkloFx/fvAZQCer0LBcB9Pk1tR/wn/CZ2ew1XBYhRt0LV/6NHUXSxGQwBgo4RKgUcuMpYK5pvgxiSYQReT0IAD6vRkyhoRQE74lKTktYDYDe9jBBQpQA76dUawiVyOwB6NC7jvVTYpwMAD6Gil0XhlY/xCCYLOzY7F2RAVdt3ssDe+DmaVM1kuzt35wZie6F0cKmLGVKgtlLVtgHTZFxR6YSAAsKSwmS2MfQWIDUxmC5ObVGwy5TCRNjuOinGLgE8r7Wc0s7G1JAFLcafWQO+6+elFyB5pBXUJj66IhYQniSOdsh6RWv6GO/HtIygIy02PbCgN0rb4WgGNsud9NG3Ezd4SFx9wFsANg4/WgKQB49SPRSLdpODi5kAqiuRlg256NJSzjW3ZOymo2e5ssWpwIQg17R7yhd2fbBQysLhhBO3BjQNfTXth/paCcRFAeNoNgeRdU0G4XLSCeFYh3umwWZSDXeRHt4H8XJzGRzezgqLjCqbKdHVSL7IllNuq/OJNQI6XiW6E37R7crfgzv7I2EV+npyGl6i4v2gRkxlrE0AiXGNlMHjSryHevKDEKQwovsHPE5PmXXNNGYWBJBdr9mAR06mkFHI+s6gg22UGMl9sL+CtLIfFOKcO86X/dI90cOQqaVUxmtZZkXD/TzInGvGNqZWJke5b/iHjdhBUMjE8B1t/HpsbOXTh41hOGo3Egkgz33L8I0lWxCr6q3g69ZVbWOYnqvRX9d9Y/P945ub/np5enpa+hl9LDi6YyyfK3t7PdePB91ydi/fMsm/PL09P7++bjVwu52X2+Xv1pYA3O53dbl/e/lH0n8BA9EgToTjv3wAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 175000,
            ap: 1750,
            dps: 583.33,
            speed: 6,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 90,
            foreswing: 11,
            backswing: 36,
            tba: 40
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 7000,
            actualDps: 2333.32,
            magnification: "400%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "514",
          enemyName: "ドレミちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMDAwMFBQUHBwcICAgJCQkJCQkJCQkNDQ0NDQ0ODg4QEBAQEBARERESEhISEhIVFRUYGBgaGhoaGhoaGhocHBwdHR0gICAgICAjIyMjIyMkJCQlJSUnJycoKCgrKysrKyssLCwvLy8wMDAzMzM1NTU4ODg5OTk8PDw+Pj4/Pz9AQEBAQEBFRUVGRkZGRkZMTExNTU1QUFBRUVFXV1dZWVlfX19iYmJnZ2dtbW1xcXF2dnZ3d3d9fX2AgICCgoKGhoaLi4uPj4+UlJSYmJihoaGnp6esrKywsLC1tbW7u7u/v7/BwcHExMTHx8fKysrNzc3Q0NDT09PV1dXX19fb29ve3t7i4uLj4+Pl5eXp6enr6+vt7e3v7+/x8fHz8/P19fX39/f5+fn7+/v8/Pz+/v7///////9c65ZIAAAAgHRSTlMACA4dJS83PktSXHKCjJy85P983Otlq9CT9v227uX1/4n48dfn/5y3+O6+yfzj9dX/ue/+j//u3/v/5fz/9t//Xf/be/+/8v//5J///v//7v/////u/wD///////7///////3///////////////////////////////////8A/+sSjiMAAAUCSURBVFiF7Zb7X9pIEMBRaKXWSrdUWlKE2pqeVqypVCtHrzk8T/BAiiDKyyBgEKSRN/KQm3+9uwmPJL7au1+dzwd2dzbzzezszGY1//5P0dwD7gH3gHvAAHBwh2hEmXi3sry6vvJ+RjOS/vzPACberge5826rkGDndf8B8JKKwkBCSPvLgFf2BowkYvxVwJQNFLKgf639eYBGM24ugzMuA3wzob80mnf6WwFke7CMvZv75/U2ZJDjYgRIGj2b2iW75eHdAP3zzeTmShLoUjAyAuxTsLocLcybbgKMP5x8/HhG/0AzhdJw/HmVtwfhaHcECDqC/lgqu3M9QDNpMj43W+fezM7PUzWAjXmG2QLgvEP7+lm+0nIls/vXAXQms+XrfqbUbDXOT2JZgEM6afNjq5ivb97mC90uBAPZ7M70FYDGhJZTg/dA8XuzDZ5dn/hubwhKJBm6paqYC6Fs3KxTAyaQNTt0tJov4KyjPWmHOGT47Fn2NJ8/LZR6hBfdRw/U2ziJvsnTJY83rmuPhAPizjl5AS66cAlQ7gD4mKxFq06kxygxsu51qkXS5rZ8HGnpVLU3CELQ76ZR6IU6E2fQkfz951kx/Sue6AlunCwZNMRkYn2cAClkUAG0KKZM+GLpknjgaWOP8z68kRB3ORPdltjFL0AmJcBoV9pDmSc+R/zioOPb8m65qwLrZj0daf4CvZQDdKioAuTbGJCxn0ijXMC3mwFIB/fygwdaaEYGeEX3egr7OgbuMqwiLirJIu0Q8NLmPVfOCnh87GjeYo9rwjIATCNbsKWYuyzXcci93K0AQFMSYAoBlVDNFYVcBbyp2wEZNE4AD8yQthVV3hah1hbYmkzDS+G7jMvOR4YUpMbM7tK+5rliDb0C9MAflqsiSCCNy9Ed6XJoDAM+/r1k5lt1xT52cSWlkGIFFwh59zwUzeRkyoVpMYgGa7dV/C5/unWGf2lW8uqiWmsDBGIBRK+h05A8XBwlAd7g3BTkgJqIkwqpUS6XKwQVxO/mFF4BWB8RgGnxUqmG+gjQKhOpwPWyYyCAqUVBpSdLgGO23XcAyw2A9CwB6N9eyRgcRAiIcW+L9tUbALBIDqYx045aXyRFl1iDPqGiXuNQtp+RWtC/UeuFOvn3isXUaTa76vmh7L0Xq5FSHSdQPSX/4fA1JkpJroiAt0ilr38v4f9o6E5AelkELFFOhbpdrpADInI3oLAqAlY+IL9c3eBxIlwI7M31fHYmtZV1EfBx4Ry55fOdfAeXiptL32CfRXPS4dj4LAI+UVCj0bHsCaHa6pY9h2IuXZUwmvhtT+z1pCDqKYFcn75kRmurnjXAk/ONaq8+7KUWjbqDR6tiP24RAeOzKTyo+qm1mJS09eJJB0IMBFIDK67/fS5F7eZn5ByxxnJ8YtvSv+m8kuLdCDsouy/JlzpQvYQTeyYwvN/hO0qTj/mdzBfrE9Hkz6+/f37/bKz/YZn50H8usWQwOx2OtTW3MwCc44/AAOBi3O4vbCBZalgm5VeKPmDM2v8ubM88NOPFFNLJsM2RXH7B9u1PrbMJqaYzRu01gAOjdJGrWQ8OUL+4F18vftINPPMbprel3jfDwVWAVj+N9iKHh3Hbc+NTM32UOj5O+RERezB9wvM8h54aUZRLcUdx9OQaD7ST0y8WXK4Nxxy2oWx2hmHWaIoAbLSToSksuLuwseHaWDdM6RSAH/yFhq18QvAQAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1800000,
            ap: 28000,
            dps: 10500.0,
            speed: 14,
            range: 180,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1500,
            freq: 80,
            foreswing: 40,
            backswing: 40,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 28000,
            actualDps: 10500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 33750,
            actualAp: 4000,
            actualDps: 4285.73,
            magnification: "250%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
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
            actualHp: 1250,
            actualAp: 500,
            actualDps: 1000.0,
            magnification: "250%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 75052,
            actualDps: 5729.16,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1232Data;

