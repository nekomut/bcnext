// Stage 1326 Data
import type { StageData } from '../../app/stage/types';

export const e1326Data: StageData = {
  eventId: 1326,
  eventName: "進化の虹獣石",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 326,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "天災の七光り 超極ムズ",
      baseHp: 2000000,
      width: 5000,
      enemyLimit: 25,
      requiredCost: 1000,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "184",
          treasureName: "虹獣石",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "4",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 9000,
            actualDps: 1698.12,
            magnification: "200%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "614",
          enemyName: "超爆獣アリアント",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 135000,
            dps: 9396.75,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 280,
            freq: 431,
            foreswing: 160,
            backswing: 47,
            tba: 134
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 270000,
            actualDps: 18793.5,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "43.3-50.0s",
            delayFrames: "1,300-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "624",
          enemyName: "超翼獣ピヨルーツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUICAgICAgJCQkKCgoKCgoUFBQYGBgZGRkbGxscHBwhISEiIiIjIyMtLS0uLi4zMzM8PDxFRUVHR0dOTk7/BwdVVVVhYWFsbGx0dHSCgoKKior/YWGSkpKbm5ukpKSurq68vLzEwsLJycnNzc3R0dHV1dXZ2dng4ODl5eXv7e309PT6+vr////zEDuQAAAAQHRSTlMABREYIS04X2pUquP+RnqImpLCcaPUuO3+esvfkNWt/7zk//3u/97/////////////////////////////////beYQcAAABbpJREFUWIWlV4lWo0oQzWJWJyTRbE+NGBIc1mFteoPu//+rV91ETcxI9L1yDmQ43Nu3blU10Gp9I24Gw+FiuX68m48637n/LNrd7v3B3ljWfm9Zlrme3fwI3jG2h4PPfC9zgcBcLu4n3Z/gB48RZZQRFPmu7a8HnVZ3MOpN7oe99nfg/ZVXMEogKM1T31o+77aeb5ompLI0rqbSme5TruGKoYhsZ08o5lGcuMoPczPuNeJHjyFjFOdFzYCzzPeY+hHFrru/Xc2ms3kDQ2fmIFg+zzAcNAPLbKL14DSxV3U1vzaiv40ZWJelIBohjWN+xAENv5C/n19Jf2jnnBawckHhDxP4R7gXwyVFQJAzasZPfc4g+arMKaa0ICjXKEQRVmJYMmvGGz4sj7gUClcigpgSEviVKkZBKA+GjfiJzSgiQkiMCBaYoJLhoqB2AavrojCn34TvPhYMMSklzymqOCqYRCSjqUMxxhyrcowbBYxjrvFCaRcIEwkCEPc8iomAJAizGxto4HJcAF4yjUVFKQsMMuyEwH+hs1ncaGFvR0A44KscF0JA2WSpejHfF1hUBUsydmgags4yZeC/FLIoYG0tgBYMs9ghlaTE3aB0USv9ex7jiCOiEihzDEaoLCT0EOKBB6Kw88sp3Ym+c3gLQrqfWaYexxovwXFgQbiEA+c4Mh0kuLvZxPSxHoDRZnUzXxufDHTYEV+BdgHigYUWgmBk/TItd2OZKD3WcGhu1ubyfJp6B2gVjZdUJ1JADwis+oA5tgkcpkn9UatvLBaDlbUxzfORaD/klAgFF0I5KCswHjKoKkSpzR3T3PhueDBewqJkoZWY1icBE59jUQvgiOoj+MiJ5AXFdlmYriNLc5/U90RB4A7OHVhkhNd4SXQrUMVHoJiYFjYrQy+UMkvheppxyZ3kcP6M6Ozo0QDoYiVAYBhIAUkBATJzSa0YFFUyDTAJJHOyxacS+Kw8ZsBQBb8qZUipsyDUSoSzx+qytKG3EhmF2f05wV3G5FsGVPeSHkkwE3qDhZ4Xipo/CKtK5G5F7s48vNnTUrWwWrr2klfHgxoGZjlv9DKN4igGu4IzE6cRXMJgUSm4liJKUSaS14NNiE3lR9TFLh9OJEwOtJLVLiIilUyZz2B4glepVVHM1CxchPsxCt3HHG71jJdV7pQVzdB86+dsqgkqaCZmo5O1336m76PQXqWkLILhTa/7NMvk7uG51X919v1X8CVIQE/q1GBRfVCIkq/eCIwwObwY9VbZQ+Ho5qbV3i1nbcOTyeyVy8oLpGoC+ec3f1eQ/6bbUb07TZxk9b7NTCL92Gkvh/Ai8BrP2t0XIr1U2k4mZPaneico/1SRP6170D+Z6+nR24Vq1KetMuggXSqzkJ8YcIyDVr3YTU7qadRvIG1d5KGWuGCeIH5wWYYqPijN47OXlmNt2/piX9M8EV8SO/tLIcWL6sHW19HujNqt3pbBHFL3dOmyPiOjAayjv5/0dpFAJUHBhwXIcXMtIF1dI7hHu50aKCeVHx7mbl4EEdRDuI1PSchgOCeR2iVS/0R/uPEC23JVRyTNz+lW+3Ed6k3CPR0lGgeRn9daplcyeM4TdV96aqDCvVWkuPauM4lV70dnAk7jKkFr5iKZe5ct+CblWgqt9tQrnfS4WV7yxINrBK3WKnGyTD9wEnZB0PioP0bPzn0vQlWZRBd4crWPVNyHkoW+78eXFjS/bb3HLNJb0WWki+tgHXP/r2Uolt/+/hke0CU+2/7g46e3CspzeBmMf/Tt0xpsffSxIeNg+40OOI/2YG17UZKmcejuFqNvfTN9imdvMjIMY7hqflX9Op5e6/M/h59/fdbAI8H94b/oP1Pwvwn+E3wyegmfjPnDfPQcqHPzhj4xZuPV3XK5vF2vf9XhpnESJUngBuocB95yPJ18TTAd352AITbWHo7wDb8xN/psbm5X6k31X+WMnmxQpH40AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1770000,
            ap: 20000,
            dps: 6741.57,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 89,
            foreswing: 22,
            backswing: 23,
            tba: 34
          },
          stageStats: {
            actualHp: 1770000,
            actualAp: 20000,
            actualDps: 6741.57,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "610",
          enemyName: "超棘獣ナマケモルガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAwMBBAUDAwQDAwQEBgcFBwkBDBUGCw4JDBAIDRAJDhIIDxQKEhgMExgNFhwNFhwNFhwPGSAPGSAQGyMRHiYVHSIOIzEVIywWJC4ZKTQZKzgaKzgaKzcdMD0fNEIfNkUnND0iOkslQFI2PkYoRVgpRFg5QEUpRVksS2AuT2UwUWcwUmlAT1kxVGsxVGs0WXI3X3k5YHtNWmY6Y347ZYE/aodAa4lBb45EdJVfdYRKfqFMgqdQh61phppSjbVTjbRVkrxZl8FamsVcncldoM18mKtgpNJhp9ZjqdhlrNyLpLVnsOJptOeIr8htue2arLhuvPGWtMlxwfeltcB0xv2XvNV3y/+bx9vHubB81P/EwsCC3v+47fv//v2gK3VwAAAAgHRSTlMABAcNEhojMjc+Qkxvl6y/0Ojy+C06W32S3f9VZnWCibXF1aFfyuK7qf94toTQkWey3/ep/+7aZMiY/97/vM//sNa2/////9R78sb/z+i/3/////H//+3/+f//////////7v///////////////////////////////////////0AGKagAAALaSURBVFiF7ZPtX5NQHMVx6pzOp5nTydTpnBpq5gNl4QoLxIwshk6EAdIYyECuN1xzttJ/PZza0yfN6i3fV78Xv3M4954LggQEBAQEBAQEBAQE/C/DM9/nUPM/GETod3OZaEdHR3sbkkzFk38hDTUhkZmHy0rN1lVFVWRpe2trae7O8iakbQYJLcoVaFiOC3yg50Fn484G8ZHwo9XwqOwaltnAMiEwylrmzg7jjOLKhsI7V3oLSvj6gb7R9EdlqCWEIP3zz223pDskbZuXETwBRdHCqTBzuzry9M3u3u7rtW0LAFIsFUVGvYxgG9j6PkGcne3e1mXyhQIqHvQqoOjoHM6BsiOZhmlY0Ab8ztnZ6f5J4eDmJiOrWgVajfOWNFsjeN1Pz2plwy1Lpbp0fLxTIPdx9MYzJHjP8z/npzVLfnUMBx3LskjRBXCjf2SveHT46Xz/9BAd+L28aVKC5VLxoq6ipWumQYjQdC3TkGExm0CQlifq0efzw8Jp7IY7GGaKuqWJtmW6ednWNDUrwgorgLLrkOn+i42UcPjxw0khejHHfy2zbZZVZM3V865huiIPTJ3LV8s8ynqgylJiur0RcuXl21etjf3BdLz1m0dz++hjWhAFzdbXFhxQti1WgQrtAh7XPF1hqVpV3pwP+w8kOnF/5KqDBIqlp6eHE+nZ6QdLWSYv5hiOYpnRJGloGhR4yKq1fF4RJR4fWNkt1b/Y2882JBNC8LzjMkM0jWIYjhMURTEsn6MZlkU5x3m/yQkq1AlShTwpSLLssoNIdIGWvbpPtVKzSYpZvro1FMVwgiCyPgRBUgQB6tD1QKVa5VCyXtFLoFqtyThLLw3dw7I0J+ZzvJxD8Sw5e5mhpw/9GYYnMYykGdK3ZgTVVGXVzWEMQ2E/bvX1jly/hFA4Hs10Dqa6JrrHesYne9NDQ1OxWKzvGn+eWhxK906O94x1T3SlBjsz0XjY/9OQr4J51uSY9gm/AAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 1000000,
            ap: 51000,
            dps: 5349.65,
            speed: 13,
            range: 500,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 286,
            foreswing: 35,
            backswing: 34,
            tba: 124
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 102000,
            actualDps: 10699.3,
            magnification: "200%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "611",
          enemyName: "超闇獣ダックジョー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 2000000,
            ap: 27900,
            dps: 12681.82,
            speed: 20,
            range: 250,
            rangeType: "範囲",
            kbLevel: 11,
            money: 1800,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 27900,
            actualDps: 12681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "604",
          enemyName: "超鳥獣アヒルジョー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 1200000,
            ap: 19500,
            dps: 8863.64,
            speed: 15,
            range: 250,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 19500,
            actualDps: 8863.64,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "627",
          enemyName: "超古獣マガモジョー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEDAwMEBAQFBAQFBQUICAgICAgWGxAdIhcmJyMiLhYxPCU5SilHUzlNYTdYbz1kekh3hGWJiYmenZ2pqaq5uLnIyMnV1dXi4uPt7e729vb////////2fAR/AAAAIHRSTlMALBVCV/XecJW7/t/A/////f////////////////8A/8yQS7sAAAQ1SURBVFiFnZaLdqsqEIZFRRDDdUBQ4+b93/IMmjYnl9bUWV2puuRzbvxD9W+36sBqVj8++Pe18EMAE+QcoN0/XAvLzgF62Tfln4XLOQCzzrRVq8Cpxxg+BTTKgaq50dY9xvBxEgdQ7tIbCWcANWaQGzBGGuX1iRAayauqA2u1PpnEATTvBXilnO3qEwBuvAej0AVj+zMeVC1XFpzRxun2BKBmLeuUsVIoda6VewfWOakMTemMBxXpB6UVTdmmbPiZHLBOK6GnnJec5+EEoAOpluu65nWc88j/Dqh5Z3KxqMdZa94Q0rSs7PEPARjEMBfANSatvFWYUGuNbP+gSHzZXBiNxopYC+AgeEH+ANjXU13WWvw8FhYMfwa0PwOuBRCoVtIUggM01z8DuubHJExbDooiSGlcaWyl/fAMkMNPADJuMeREbTASDVurG14Al2fVvZvdAdAyBYDaBlY01UsOelBV+55x2RuBlc7GXSUpL8rwDOC44bv3YbCtjrDpSU2aZheWZwDTFlsE2+wV0G5ZtE9PnwFNAQAf/q98t281KeNGcAezkShAgrR21w3eVhfwe05IzGnJ/khQOmwwXZzYvA6XCnK+NGXVXsd0NBtx+GiUb9CE1bXLqeUhe1UiatEDTMORrLfaKVRvsJ03nVqzlymOOaJD/Zpj+irDz4CaGmswBCHWbM2cp7is8zXHvsfFeUVBOhptHDPgtNDSlPfHdE1b/a/lFyUpZ3cAIMriftGgFC6ZfJzysuabpfDiwisANVwrnGKyKFCYc5zyt02bNw+t8AaARwFpQZuy/zF/ebrmR5va3wHogrOo4iWE5O6r0ft1v7scAIjESnqQEd+d9++XX/wbQ37eD+8AFZcU31zn5evjMRRUXlLcHoX6AFB1NG2lCyGMYxi9xHXjcosDL8kRoJXal4RrKpWUQmAqE9yzGA4B9WCpnea8SInyvSUju3s5PTsC4LlS+NJ3aTTCaZvQ8/DtwhouhwDml2ku8eIgs07oUoTvisYYyRGgKZ9bolfCemfVlkCINwDMCzsCVP1YxljRb4NtRQsv+JsDZrna+gjQ0FjmmMCDpQaQcp5TcpsLK0BaoqkPABWh87YVpm1fhMlMsLh121+jwh3GjgBV3ZW+jVQ7OYYlyewhYCp8Fy88R3UMwH5Elz1YmRaXg81R0CkbUlHeJNt9AmjNHKetdyMN0cvRirKMtRUdCPkAgFEIHBJjnBMFQ0X/Pfr5/Zj1K6AU09Z10za9WXx/7566/hSw3MSDjdk/zbSPAMN12Z3l8XmgfASo1XqrN0+nAATLtwMu17l/t/wAwHyeMISmuJLx1EHIHwF8jIvppOxbbP/QDUq8nuF+9yBMMYUISrhpTGMMSvMPAIQxzvvNBKCsBqNwUBZ9xa7SHT7maIz8DMDVHd2s6zp6uyx32/12hZDmEfAfCi7Y9HEdpckAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 2200000,
            ap: 35000,
            dps: 15909.09,
            speed: 13,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2100,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 35000,
            actualDps: 15909.09,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1326Data;

