// Stage 1345 Data
import type { StageData } from '../../app/stage/types';

export const e1345Data: StageData = {
  eventId: 1345,
  eventName: "密林の異変Ⅲ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 345,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "牙研ぐ死海魚",
      baseHp: 1050000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 150,
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
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 600,
            actualDps: 486.4,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "15",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "652",
          enemyName: "超魚獣アンガブル",
          icon: "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",
          traits: ["浮", "ゾ"],
          baseStats: {
            hp: 420000,
            ap: 13000,
            dps: 6000.0,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 65,
            foreswing: 16,
            backswing: 19,
            tba: 25
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 13000,
            actualDps: 6000.0,
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
            "slow": {
                chance: 100,
                duration_f: 50,
                duration_s: 1.67
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "surge": {
                chance: 75,
                distance_start: 280,
                distance_end: 980,
                level: 1
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "634",
          enemyName: "超舌獣ラングマスター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwQDAwQDAwMHCw4JDRAKERYMExgMExgOGB4RGyIVIisXJS8ZKjUdMD0hNkUuNygjO0wnQVMqRlktTGEvUGYxUmkzVWw0WHA1WnM2XHY5YHtoYQ48ZYE/a4hCcI9GdpZIe55MgaVngWJRiK5UjrZWk7xZlsBcnMdeoMxfoc5go9Fip9ZkqtpnsOHKrQHlwyq3AAAAQHRSTlMAChYiLzxOZG999onU4pKdqcX/utv/8uj/2P//8///////////////////////////////////////////////vOSQoAAABm1JREFUWIWdV4l24rgSDUtYshAwAdxWJD1tliWNjfFgjDfm///qSaY7050A6ek6SSDnuK6qbtUtle/ubtp00ru7n9x+5qY9sm+jIZ79OcCQVXgeb8d/jvCtahhs3gZ/HAFvq5aw7M+SmLwsX8WhqiuoN73/7j6YeHFiMDnVp8wPFi/j/n/zXr5RxpQScJtvBY+NYm/z+98HmMJdYjSXkUSA81DJSMeJwovfLEdvNPOplJGKFGKZUdHZVGzQ4jei6E+/ES4x0p0XoyKKtI6E4CJSJgSzL7jojTdhYpTS+AygBAtDDBD931+IcqUNfrrdFKNVYkmzh+JIudiVZFIyLA5//5MeJGFc0uebaQyePESsoybciDBSnEiLYmIRpmXd7LP8cEzXo+v+4w1BHtMudIigiRSTxoWiEoPSuqzruqra/CpCb06MNoB16SuDhbYIWNpCchImeVWercnXw8vhL2Rig0fUnPnjOHF/haSRyY6NC+A7QvZ0qRaD1ziRjj6SKKVc6sTVUEVyl59OjbVi3zRdGG2y+KyO3iJx/jZowAVnofv6vYViHabZLqGvTzirO4hWzT/nn2Th2UVQigMZ/TAVqjpZT6fj+97daI7SykJUDZ1+TGAltltt2816KB0B/Y4QSnYs1j+eu58DfWxtMeBHYYyePQDwdycNbfkcDbaCAeSshv/yPnzcyEPTHDYfk+g/Q+B/P1cxFHKbEaJaeh7lW/1zxP3pRtbbxacqrCNJ8Nborg2YSyZaeVwFHo6x/vXxwQxsPmniEWsVAcEpJqoL3grB87CRgEYg+zhYh596qfd6Dh0hDM71s/kTj2irTGZBbwjgbGPkGlBprQ0iVgAyErYcXCgpAUDB6uUrgGWkfxReBFoKYaMRWkmODUtWuX6+3P/v1n/bvldeEcxdDWmAJQOAkDqr2uT2HLgbhant3q6PrAZ1x4IhniJm56VWSGW7ux3DbLezc9g2kpbY/ird5eIhmNVpWVZWiG1yUYM/bAECf+V5ccxW3sokIUDGwgSebMqmqorUToM2ukXk/fzZWwU+ISA2IgABARStgM8qJ77qIGKbRQ1u0tCbouZIourUnvKkaHPI90kg29LNkSrf17nO00/t+4tNWLHPsl223+eFdSuLok5RUx3TfX3YF/VBpg282U4vLE13WbbPcwtgQ8/tEAFFXcikSYTMmsOh3X6aIz/bcn9qymNxyB3C8WiZb1q8a8ricNQyTO2/9XF9qxCvgvJ4mzrb7Q+HOrfRkMiSUJWJFGmdZmWDb9A4fFgBCBFxV8ghjSi080VqWNepKep8m5VapC27TkJvQUKtBCUwAAgCiClnKAi8rNmGBzvK66MK44ZeBxjjuBsD2qIIeyFr5b4LQNpjXu9Ucqh3Ir6VwlypdzG9f7Mzwc+a2vpaDqpdWgdXI+h9S/6d5D+ZxrCq6iwU3dWY+2+PVwD6yMlZ/griItF+aAuxN5lTZAxicgVhgK2cDZfuPnBqdh9ndQt/15bdrWgvA6JSeJmGwVsWawKgiY1RKBD2g5GwY5X6+7aynVm3/OF1jc1lTQ58TjCLGMacIsYx54i6scrtXoNWSdm2bU6CzWAwBU+XOVg8E80ojyRlroCcCN1xuJKaex6gmvnQADuUJssrNI4xQowJeS6iOq9IGnpAKeRT5M02UewA7q7IYTT3AyTsUkk79/NmwDXwfDvifc284Rhur2tpeL+0J4WEKsWoG44k1oyHSIcroFUYMN+f9Nbm8kDp9Xr9hdUAsWfaDY9jgaG9i7AlEVAjuHYkELS8ewGXd93p8+s6sMeyLmmJOLRx6JDbGlDf7qd2W/UhhJu78dPltb+/hKGR7lLTWtIgsH3kfro2BFABggjOZcqG/atL6uQVYEoJhsHKw9ZZh5h2e5amkJK2ALutyOJbr2+90fTlZTYdj9YMUDsLAGE0lK4dfHSsq6JOxD778nq1do9PMQarFZJdDpKTlV9YGZZ5cixuz/SzzWO7Dh4ND7x1YG+q1cPT7BE3Vb1Ljtvs7eu3nsHaHbePazgZDO/vh0PH2jJu6zQ8Jnv69dvGTLgZXBTs53QdapGWx0Z8/cYzY26XtdfwL/UeE3u9ltXJfNwtP1tvDndlU64/1HuZnpq22cMvXsP7o8l09uAFEDwsF0/vtlgsnkG208h7Gt/ecgaT2XzpXJ8fPpqFWc5fHqefWfw/0MI54r7xKW4AAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 950000,
            ap: 28000,
            dps: 17142.86,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 49,
            foreswing: 14,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 950000,
            actualAp: 28000,
            actualDps: 17142.86,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [22000, 6000],
                timings: [14, 15]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "aku-shield": {
                hp: 400000
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "652",
          enemyName: "超魚獣アンガブル",
          icon: "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",
          traits: ["浮", "ゾ"],
          baseStats: {
            hp: 420000,
            ap: 13000,
            dps: 6000.0,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 65,
            foreswing: 16,
            backswing: 19,
            tba: 25
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 13000,
            actualDps: 6000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "100.0-103.3s",
            delayFrames: "3,000-3,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 50,
                duration_s: 1.67
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            },
            "surge": {
                chance: 75,
                distance_start: 280,
                distance_end: 980,
                level: 1
            },
            "behemoth": {
                enabled: true
            }
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
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [17000, 17000, 17000],
                timings: [35, 37, 39]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 501]
            },
            "freeze": {
                chance: 40,
                duration_f: 100,
                duration_s: 3.33
            },
            "immune-waves": {
                enabled: true
            },
            "aku-shield": {
                hp: 50000
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1345Data;

