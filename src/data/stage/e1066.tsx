// Stage 1066 Data
import type { StageData } from '../../app/stage/types';

export const e1066Data: StageData = {
  eventId: 1066,
  eventName: "絶望異次元",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 66,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "進撃のブラックホール 超激ムズ",
      baseHp: 999000,
      width: 5600,
      enemyLimit: 8,
      requiredCost: 200,
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
          treasureId: "1120",
          treasureName: "ドラムメニャー(201)",
          probability: "30",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.3-16.7s",
            delayFrames: "160-500f",
            baseHpRatio: "350%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBwcICAkICQoICQoJCwoJDAwLDA4RFxYRGBgZJSUeLCsfLCwlNzUpOjk0QUAuRUMzS0g4VVE6WFZAXltFaWReXl9Sd3NXhoBdjYdimJGLi4tuqqJ0sqt8vLasrKyBxr+3traI0MiN2dCV4tyZ6OKb7+XX19eg9euj+u+h/u719fX///9OZ5qiAAAAQHRSTlMABQoQGSMsNkJOXGh0/IWPfqCXvN2vp+fD88391uLz/+f///L+//b/////////////////////////////////aKaeZQAABZBJREFUWIWVV4l2okAQXAFFUfGKyI0gVwYJkAnXzpj9/7/aRo0XmpiK79kQu5ieqT748+dbMD2ePdndgdD9/ue36DD8dNLrHGyWn8qLQedX/l1hpssDZm9zgrT2DYH5hT/Di+raNUSu8e9N5U0cG0P2R7ezf39uhEniL3qNv6j7aZmuf0HA9GcGykmJ9H6n053qISYkW4+459c/W0cF3dWxIbDsUA0yQgleT589hk5vYkQF2e1ICk68tEnApvlm3nuSgBvpKKc7AN5I/ZG+rRq7eJqgwy83SVk1wL48ko4XDRn7jBI63PDFRvG2QeSuZLjY28hUxUHvZykwXWGhaJZ9hGWa1sk09Hn/p6Nk+xPZdFGcHJECTmaC1tLgW4YON5BWbpQVhFK6a/2RMoaN+CaKTne4MMO0IrsHoGV8UPcj/5Fqorx+5N4gD5f8w6NgBdlExcPH71Fv9Ycp0eFnSngQ0GOQxJg+ioGb6gH+/vmwC9n60SYwg4Wb1D8soCGYPCDgIIPKH9yBIH20AmYgu+lPz98TPNgDTlyh4mf/xwS9pZmQ2xWA+q5vUZLeOQWux3WYvurj9vMqnJUXFCRPozYBMxAFhhX0qB1BlQReXJ75cuTaLy0CTlQnLDc14qpFUASa5uGvJVCS2ONxi6DTXypStzdX7oigCDUtOBGADG1NaxEwQ12T+/zMTFsqpHUaeEn5dR9CiMKgtQfcZO3qw75kZq0IYNFFUdG9b1Mf6jLP4xZBT/KjtdhfmudDoBeH11jQFQB1nsRxEhkTvstdZnR/GWZoKdwQXG0HKXOc4ySwHcexFHUpjS6L62CBykSfLDYnghpnWQ6R08Pzd3WRxts4cpzo/f3tVdM2pi7yZwZBjercl1U//yIoked5CFOIea9NWuUY48R23v7+/UBWAE1XHZ3bHCiIVFtD9790BIUPhQHKaJXh88nSKnIChF7dICUkMSX+kqAmqbk6EexIVRYYl3Bo6YU0SBGHIRCnFaV4s+hfhbArfOVMABmQJllVJ95VetGqKPL93tBsszwTDOSw3FWR5p1CIBiFKC6q2EluKvTxdEhszs4h8JKPKYkt7xwC3iZFRerEQfjQZG9QIP1iVuDEdUx2mROck5FUTew0D20PRS1sI7SeX/QnKKZ+TrAX3GYzrTPIXstq5HOCbSmGoc+uOiRkMsrvEDSZkCWu/fZ+gTdTHg0F/qq3dPi54Ud3CJpgyjD4+Pz8/Pf1eV/Pu+ztnAEjqWxadwl2Zfj68e8C73cbE3T1+cq7S1B4r38v/D/fH7RGpi/79wjoLcHbo97aW35L8Hn8/JqgCaHZxBN+S0Cw67x9XAAZX68ATxHQIrwVkgYqvscABHnbn+Qo3MZXiHz1bhDd+Toju9uxDGpRcZNOZbKZdVnmdhEw0xtxSZ8B9hfD4ZC/HvaY3mj54sbZE0gjU5V1Vbwe/WG+U1aK7QVQs6CgNt8NwN5/uft/BEFzw7UUM4wuK9J+C2eK67leGEWeBdseHMZruHAaC7kwOztwO4pQ4AUoKQq0uCboigbCuKjqIoTZPC1q6EOkxoG1LcGs0sAGfiuEH1RlWRFa+DcrYPdFpRFeiIpDJaa7cmtpcVMUaY3jOIvtY75SeJO5ffloDmELL0kwEECFPVTiOtm8GP5hcKR1XcY2KvdVFfqF3xI0DAlmlNe0Qm7atGMYzBNHUVUF3tcOhThzIR4Y4qHHxq4utvTMDmXTi/Nia3sxLss8QTCMKOOxFiSgpbLMYNSwUZrjdOuZK0loyZkZzF7Glus5mma5Qeja2viI5jIMnMbU7KaqjserxbTfkiIvTBbqy6qBcsQXxVgDNmV1xIu6WIpCOyUZluMHwmg0morz2UySlssFQAY034ulNJtPJhNxOhIGfI9jD0r+D1j96EEM7X0mAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 300,
            actualDps: 219.52,
            magnification: "200%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "4.0-16.0s",
            delayFrames: "120-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 600,
            actualDps: 439.04,
            magnification: "400%",
            count: "10",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "4.0-16.0s",
            delayFrames: "120-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 900,
            actualDps: 658.56,
            magnification: "600%",
            count: "10",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "4.0-16.0s",
            delayFrames: "120-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 1200,
            actualDps: 878.08,
            magnification: "800%",
            count: "10",
            spawnTime: "213.3s",
            spawnTimeFrames: "6,400f",
            delay: "4.0-16.0s",
            delayFrames: "120-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBwcICAkICQoICQoJCwoJDAwLDA4RFxYRGBgZJSUeLCsfLCwlNzUpOjk0QUAuRUMzS0g4VVE6WFZAXltFaWReXl9Sd3NXhoBdjYdimJGLi4tuqqJ0sqt8vLasrKyBxr+3traI0MiN2dCV4tyZ6OKb7+XX19eg9euj+u+h/u719fX///9OZ5qiAAAAQHRSTlMABQoQGSMsNkJOXGh0/IWPfqCXvN2vp+fD88391uLz/+f///L+//b/////////////////////////////////aKaeZQAABZBJREFUWIWVV4l2okAQXAFFUfGKyI0gVwYJkAnXzpj9/7/aRo0XmpiK79kQu5ieqT748+dbMD2ePdndgdD9/ue36DD8dNLrHGyWn8qLQedX/l1hpssDZm9zgrT2DYH5hT/Di+raNUSu8e9N5U0cG0P2R7ezf39uhEniL3qNv6j7aZmuf0HA9GcGykmJ9H6n053qISYkW4+459c/W0cF3dWxIbDsUA0yQgleT589hk5vYkQF2e1ICk68tEnApvlm3nuSgBvpKKc7AN5I/ZG+rRq7eJqgwy83SVk1wL48ko4XDRn7jBI63PDFRvG2QeSuZLjY28hUxUHvZykwXWGhaJZ9hGWa1sk09Hn/p6Nk+xPZdFGcHJECTmaC1tLgW4YON5BWbpQVhFK6a/2RMoaN+CaKTne4MMO0IrsHoGV8UPcj/5Fqorx+5N4gD5f8w6NgBdlExcPH71Fv9Ycp0eFnSngQ0GOQxJg+ioGb6gH+/vmwC9n60SYwg4Wb1D8soCGYPCDgIIPKH9yBIH20AmYgu+lPz98TPNgDTlyh4mf/xwS9pZmQ2xWA+q5vUZLeOQWux3WYvurj9vMqnJUXFCRPozYBMxAFhhX0qB1BlQReXJ75cuTaLy0CTlQnLDc14qpFUASa5uGvJVCS2ONxi6DTXypStzdX7oigCDUtOBGADG1NaxEwQ12T+/zMTFsqpHUaeEn5dR9CiMKgtQfcZO3qw75kZq0IYNFFUdG9b1Mf6jLP4xZBT/KjtdhfmudDoBeH11jQFQB1nsRxEhkTvstdZnR/GWZoKdwQXG0HKXOc4ySwHcexFHUpjS6L62CBykSfLDYnghpnWQ6R08Pzd3WRxts4cpzo/f3tVdM2pi7yZwZBjercl1U//yIoked5CFOIea9NWuUY48R23v7+/UBWAE1XHZ3bHCiIVFtD9790BIUPhQHKaJXh88nSKnIChF7dICUkMSX+kqAmqbk6EexIVRYYl3Bo6YU0SBGHIRCnFaV4s+hfhbArfOVMABmQJllVJ95VetGqKPL93tBsszwTDOSw3FWR5p1CIBiFKC6q2EluKvTxdEhszs4h8JKPKYkt7xwC3iZFRerEQfjQZG9QIP1iVuDEdUx2mROck5FUTew0D20PRS1sI7SeX/QnKKZ+TrAX3GYzrTPIXstq5HOCbSmGoc+uOiRkMsrvEDSZkCWu/fZ+gTdTHg0F/qq3dPi54Ud3CJpgyjD4+Pz8/Pf1eV/Pu+ztnAEjqWxadwl2Zfj68e8C73cbE3T1+cq7S1B4r38v/D/fH7RGpi/79wjoLcHbo97aW35L8Hn8/JqgCaHZxBN+S0Cw67x9XAAZX68ATxHQIrwVkgYqvscABHnbn+Qo3MZXiHz1bhDd+Toju9uxDGpRcZNOZbKZdVnmdhEw0xtxSZ8B9hfD4ZC/HvaY3mj54sbZE0gjU5V1Vbwe/WG+U1aK7QVQs6CgNt8NwN5/uft/BEFzw7UUM4wuK9J+C2eK67leGEWeBdseHMZruHAaC7kwOztwO4pQ4AUoKQq0uCboigbCuKjqIoTZPC1q6EOkxoG1LcGs0sAGfiuEH1RlWRFa+DcrYPdFpRFeiIpDJaa7cmtpcVMUaY3jOIvtY75SeJO5ffloDmELL0kwEECFPVTiOtm8GP5hcKR1XcY2KvdVFfqF3xI0DAlmlNe0Qm7atGMYzBNHUVUF3tcOhThzIR4Y4qHHxq4utvTMDmXTi/Nia3sxLss8QTCMKOOxFiSgpbLMYNSwUZrjdOuZK0loyZkZzF7Glus5mma5Qeja2viI5jIMnMbU7KaqjserxbTfkiIvTBbqy6qBcsQXxVgDNmV1xIu6WIpCOyUZluMHwmg0morz2UySlssFQAY034ulNJtPJhNxOhIGfI9jD0r+D1j96EEM7X0mAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 1500,
            actualDps: 1097.6,
            magnification: "1000%",
            count: "10",
            spawnTime: "280.0s",
            spawnTimeFrames: "8,400f",
            delay: "4.0-16.0s",
            delayFrames: "120-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 1800,
            actualDps: 1317.12,
            magnification: "1200%",
            count: "0",
            spawnTime: "360.0s",
            spawnTimeFrames: "10,800f",
            delay: "0.1-6.0s",
            delayFrames: "2-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "179",
          enemyName: "スペースサイクロン",
          icon: "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",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 1499999,
            ap: 9999,
            dps: 59994.0,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 999,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1499999,
            actualAp: 9999,
            actualDps: 59994.0,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 10,
                power: 300,
                duration_f: 10,
                duration_s: 0.33
            },
            "strengthen": {
                trigger_hp: 30,
                power: 200
            }
          }
        }]
    }
  ]
} as const;

export default e1066Data;

