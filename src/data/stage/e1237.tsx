// Stage 1237 Data
import type { StageData } from '../../app/stage/types';

export const e1237Data: StageData = {
  eventId: 1237,
  eventName: "大乱闘 冬イベスペシャル",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 237,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "冬の祭典 序位 極ムズ",
      baseHp: 600000,
      width: 3600,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "750000",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 2000,
            actualDps: 1818.2,
            magnification: "1000%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "1",
            spawnTime: "56.0s",
            spawnTimeFrames: "1,680f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 8709.7,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "99%",
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
            actualHp: 9000,
            actualAp: 1500,
            actualDps: 1097.6,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 6315.78,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 6315.78,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "183",
          enemyName: "サイバーX",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 120000,
            ap: 2200,
            dps: 4125.0,
            speed: 4,
            range: 60,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 13200,
            actualDps: 24750.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
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
            actualHp: 900,
            actualAp: 150,
            actualDps: 109.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "冬の祭典 中位 極ムズ",
      baseHp: 700000,
      width: 4800,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "1000000",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 21600,
            actualDps: 4872.18,
            magnification: "600%",
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
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 21600,
            actualDps: 4872.18,
            magnification: "600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 21600,
            actualDps: 4872.18,
            magnification: "600%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "049",
          enemyName: "赤井ブン太郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAQADAQEFAgEHAgAHAgAIBAQKAwAOBQIQBgIQBgESCQYcCQAnDgMaEw8wDgIcFxUgFhYwEQQyEQFCDwsjIiBEFwBKFQQlJSVqChdSGwBUHAJYHAEsKytaIAdkIgGKDR03NjZ5KAB0KgWwAzBsLhCcFB2GKwJDQkGFLQKhIxKTMgJQTk2kNQWmOABZWFa0OgOGTDDBQQNiYmLQRQHfSgF1cG7uTwD3UgD/VACHhIGrq6rU1NTq6ur9/f23yPlPAAAAQHRSTlMACK8TmB4mgjE8Z0hQWcDNid3xm3j9/6zTcP++3vL//tD//9z+/7j/7P////////T///////7/////////////tIOh1QAABr9JREFUWIWlVwt7ojoQlcW3Ym2x0q0KClheIRhCQgLW/f//6k7w1Xa3dXt3+rUfFeZw5swrtlp/Nq2vf3LnL01vmwPtnxAGy+Xsn0hosyyzut9z0XVdu9LuLDhb9L8D0O1ZLy/WbNQ5gYxC+U0EvT/zCM3W1rCrMDSTVWzR+e2xzleBdachl5x45ggEHHiyoiZcvAmspRvtL1lpIysTlWChNer0LV7JbAiwQw1uNDkZvCyNW4EMPVFVFQ+fvBWuKuH1W507QOmNAN7wsunN8tBNCgDSm1mhD1BsqumT+0Gr19ZaRshffhflg/vYyiQAsBlc3tFKioWumY8/OuZ9t7MW2eiGu7HIOLy+qrJxS2USrsOx1nt87JmrsZEB2tcA/d7CCzOmmFvAtb8EqLitDR20fPJ7U8at2wp0BsZ0EVJJF0bfcoBOZrRGKxQ76IfJufl3HaYPTFLxdX+04JXAk/F4xTjGT5O/YXCyYchVvCYXSZJkayQrQfxVwm9pcDRN07rGgnp93eKYgCCCUckRppSsb2VRzSJjak7Hnf7an0weEJUVp1CbQnAOANZNBn1zmTEGLTUJCWObZyRoQoUUVDLCiXWLgDZebwJMCKEUQQIqsnXiDYFikJgKkiQ363jskc12uw02mw1WADxIsMPURb7PURB4N+ZDf43BNdhuMBNSClnJJBHUJxXFNEeIJg9fV7Jmok1COQ+2SdOQVAFIERNOieCSxbG/HnwF0F0SxVsKrOKuRCwqYIARJczHOUhLEJp8IWPXzLhqRICgSF3ErErAB/Inckrz3HccfzX7VMfBglUnfyYVkoy5RIiAGFAHUjKGgQwOp5+UwuBpQ5RsCgAnTQpiIQk+Yh5NCoaDcKbrnd9pdBc+JKBJfiUhe0LymFZCfSAb0CMCwgELf9zd9T7S0EwqKMGEca4SQDY4jqGKQX0KVzH8gVYQFcebRHLHjR56HzgMQorzvKzrusxzKkQANQxA4IwgrxQzzgAExxyEFf6udB/eD2etndb7V2WHX4fXfU6S5yahCHpRCg7xgEFHAxEmUFoXhTt5G4T2s37d10WaRun+F9hr7cRN0FABaktQQgVHoIVgPsrTPRC1Hwbv/PdF5DZWg/9+V5dNIVTQigHkRmLOE0fFJEla7H+9Fqn9MLwCjOv9bpceARSD2nULlx0zJ0gQBBjjJFFNxfNdUcMje9ee310aS3/ZK/VOAIfDoQAiLjoXAE+2W+gw5sSC5ruyjNLXX4d0HtntcyIGZV1GURrZLuDabgr+dmQ77Fw+ItlutgmzI3CvdxBqedi7Ue3en9f0z7o88rfhp6gLd67Mp2d/vHl+3AS+nUKcjVJRmZbR7irjz7r52LaPGhxKIDJ3OBZN/Un0+OwT5xG8Tjq7dvp6KOyrjEa5m9u2rX7dCACKXTqHAChR7hw9PydwZnCi+uQPD5YHkHHuTk4AnbtdqpyBQRQpgYpijlRLQQ37znNAVf7ih7psvOfqsf2htovd/aUPoqI4pREUfo2ADWl6CiooUXsBLGy7dTRv3NVjZRHtojOA/lKqBDR3ov2+htc88tNgOblXct3t3av8NDaHbJfu/ApQu1HRINh2WkI48/jc/5diMDVt/LBXNOcgQgEi2O8AynLXAEAWQKz5pQZOQGpFt7ReWoAGc0X09VBj/+6sAQCkClllEgCKwqbvAarjUtWH9+cgypxJMj3X8s9616hrz1Ud1BDCBwDhHfcBcACFbdtx1LSAU9DJuvdQyPB6Ra4+KBHfhyDD4ans+0sc+4TDbIQBRi8MNEhDdE5DnmMCD4nqMk1FeBnlRsabqoDBzah/AWiZqhWPhUaV8LBa/FMigal/WSadKcbnvFK+uQJAN0S1KgbXl81klxL5DQfJcUzD8SmAdYbQmRkR6DpSBqD8LlLdRNUIkYpCTGAYEhRDMKdgYXJTophBiQIxEV5XNYyUJo82TEKJSfMCslovrKWqREmOcnfWlDOMECyomAnB3h64xrumRGCbVjRoomfY7OraYE1wuDaPGugLLGG4Ui4lEYJ4b1c9HCVhcTIQgAfHZUZXavD3PTwZXPbYOJRU0YcsVmw1fLdaOgtGKIejVBIca4AuOw2w513Hd2fNiXq7QlgbH1bTyGNJkARwOkkIZUDUO0680Xp2fchYLMMM+aG3mP521oGvApwmm22gLMGEng903bcnCr3bN4bDMajz0b85oDEeBGq7gtTZ975uHa1vrjYMkg+HiInxv750asadg9Djk2XcPtB+Yt2haQ3/cPz4DotP7G/99dGw12u32z/eGvzf6w1Hf5TlP7yseUrdkFt/AAAAAElFTkSuQmCC",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 400000,
            ap: 9287,
            dps: 8987.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 27861,
            actualDps: 26962.26,
            magnification: "300%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 112000,
            actualAp: 7992,
            actualDps: 13320.0,
            magnification: "800%",
            count: "10",
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
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "10",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "冬の祭典 上位 超極ムズ",
      baseHp: 800000,
      width: 3500,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 8000,
            actualDps: 7272.72,
            magnification: "800%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "4",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "30.0-50.0s",
            delayFrames: "900-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 8982,
            actualDps: 11715.66,
            magnification: "600%",
            count: "9",
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 530000,
            actualAp: 52000,
            actualDps: 29433.96,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 25200,
            actualDps: 5684.21,
            magnification: "700%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "冬の祭典 最上位 超極ムズ",
      baseHp: 900000,
      width: 4400,
      enemyLimit: 15,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "2000000",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 9990,
            actualDps: 16650.0,
            magnification: "1000%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
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
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUHBwcJCQkJCQkKCgoLCwsODg4TExMVFRUbGxsdHR0eHh4iIiImJiYoKCgpKSkwMDAyMjI1NTU8PDxAQEBKSkpQUFBUVFReXl5mZmZra2t3d3d3d3eBgYGJiYmQkJCYmJienp6jo6Opqamurq6ysrK2tra8vLzAwMDGxsbOzs7X19fe3t7m5ubs7Ozx8fH39/f+/v7////9Ed5oAAAAQHRSTlMABw8aJso0/3/AUNRCnFvg8rNui/+kf5n8y7vX//LD/tz//uL///D/8v///v////////////////////////8ALy2ibQAABphJREFUWIXtVmtzosoWjeKoSYxvozEogrTYDf2AfgGC9///q7vBZJLMmTmVqvN1dipVaLlX78daq7n733+Mu78AfwH+AvwFeAf4czj97t1dx+k7nbu7bq/zL7/8XXQ6zuJx4XRGq8fZvNtfPDnNl70G81vpo+HiaTKYDh9ecLCZLPa7RRfShz/uR98DGO0jfzMYDCaPbuhj7ySO815nNJsOpuNv5XcXAdktB00sN0jHRY4PT6N7+PhNAGcW7FaPLYCHVWmtkdHkfgpwk7HznSk4s3A3nN0qwBxHEca3lja7/XYx+jNEp+v0ek6366xd9PJjcENwsS3LS5lnxPMSY01ymDuO87utOuPFavv6sl2tF7NN4E5vAIMNq69t1CYKeG60Ou232+d+pwPnfSqmM1ofojjhJE4ihDCJkHsrgIiE26quL2XBPZQyfjGRH/j75+fhYrXofeS/RCw1gjMlKWXcaM1cd+nGOo+WSy+KMQr8zTJJY1pgLCnCMdqh5Lx+B+hviW5CGcO41oJlWez6Lq6quN3nbamDKOXGorzMNdTIy7o4vve/PlupDeepkTQzUkMVOPBdeTW+64WDDaGx56IgvtR1EeexHyubFwyr8xvAwyExqW6KN5axLDWMGUKwn9cUZpJswqLWQXIpq2aYxYUsl+RSRssNO93yu6uIKs0hP9NKpwKgmIkgqjqzecJoWkgcF9f3sFCd0q5H2P4GMHolXAPfpFbwY2NTRpkKXTeur/BXFbnN86K+fkRVCmOptccbtXuzkBnJRCYFY5xyA7WozPc3/PrHuOjM1ua13zYwnGIlWaZSSoUxKdUpdEC90NMfCXWulC2hirq+Xi5VZWDX1hwfGgqMJy61nBtlGNUS+teaMs09z7NwUnFpD+QxS+KYCSHy2mojOReURLumhd4e+crC5rnJgEaCC2sFFTzwAaAgiJTQM6eGAkExSajIBGAREFi4WwETO89x4jOpOUut0RIoaFJhAB6RIK8INhKmbxJLgERhCFk+qDMIExpQdRy1BVjuJ4BggH8CklPWbEJRxMLcICNVfa2o5lF+rWlSXtKoqEoSlxpp2wKMT2USZsCANJMpTJICGxjlkvkoyDnWfpBf88RGKUyCh1TgELoP/dPx9XBYwRJ6qzMNAi3SxndMyjUDKsOMUg4ctiyyJLBXwwVUw2whaAKjRCTajkf9fuv4/afV+jGUGeUWhCKYhjYyYIliIAWQIkZxdVUpdlm4hFpgi7UhsL6fjtJxur37CJYP1AESgQqACiIzLPFd8BKbcFhCroMl+MNStIxIEr13PltR74XmaeMBUkigMU1hmxmXwPeoeqNRtllG7nJAGjpfoow+f/HF/mtigUNMKK04NMC5NFybDGHf3vJLNHAxWAJqAHNsTw9fzHB0iCUcDCEyRoW2FkgBg4AeSFtCRcGSG4drASyW+94XADCDZncZkL2REZNQDqhbBEvPo2V1sbH3ZrBtCxqz9VdnHx8hjSolGjsDVYEWGiIo5EENYRRBK28GLdt5kPj5q6vPT40NaJUJzZQCT1O5hYXSEGPP3yBgyBsAanWlyHn+KwAHCQoNagI9KQEVGKiBhsTC8bS+WvdmrPjmF/g07Ha7nQ+Q+VkKC+NjUlGpBQdhpRmnSUAqG/ngShpmuPRCBDLyQJGh97peLBZz5wNAgze0jt5MEEQFmjQcAOorULG+qs0yYLYEPVmUlSUhRvgkOfQ/tSCBwZlphMRTAZ6WahA0IuA+HMhUhEGmRYwCuGPh0goikXg4Pvx82RgfM5Ol4DGQBELSXOhmGTyG6q86BDLlMawike3VoyVLCIYLO/y5TABIgYRGSMkaOqvGVROqEwy8KaMEYKqi/GzKjVlXxfGNTp35ScKlIHiMMWacJ4LEOAwjgqJmbSK0v/fl6jx6B9iRhKAwRHAje2ETCFPYZGqbU8sIiS93wnsUx/cp9uaL2S6W+aUqkEektfAE46ubrKK4FjE4oL38ei/Y8wehO93+4VanjbyQ5yXkN1GVeYwv18omKIiY0nCf5hakpsB/TvvhZ0V112+X0EUGr4cQ3jQgSBTsJrsGuS4V2b0GCIXt/267fh71fhHU6a3GOl4MTyCEJsLZ+GElbt/b/fAYoZBBBXzb7/zjHam3l8Utzk/zo2mf8vOi31+cVLv9ZPuwmno4g3sjXv3mHav3tNvtvCY2k8ep670/Pk6mm1tM4HHZPk3vh2PnV4Bufzx8ms3u73/8e9zfz2ZPw4ePl+7/A2A9jCy+mdoxAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 9990,
            actualDps: 16650.0,
            magnification: "1000%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "512",
          enemyName: "ミニアンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 333333,
            ap: 333,
            dps: 1998.0,
            speed: 14,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 333333,
            actualAp: 333,
            actualDps: 1998.0,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1250
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAAECAQICAQICAQICAQICAgMDAgQDAgMDAwMGAwgGBAgGBAgGBQgGBQgGBQgHBQkKBwwPChMODBAUDBofEyoeFyMhFSsiFS0iGSomGTE2JUU4IktAIEtBJlhILGBDQURWNXJSSFpgPH9XTVxXVldsQpF4SKJpXHCESrBxaXWMUruUWMeDeImfYNaqZuWvau21bvWbj6G5cf6wprXGp9TFxcXYt+nnxPzX19fm5ubw8PD+/v7///9z9XgQAAAAQHRSTlMABQwUGiMwz+ikP//fucROV4tkb5eAruum2Mn9vf3eD+3+1v///ann//3///H///z//////f/+//////////8AOcH8ewAABVdJREFUWIXtVmuXojgQXUWY0W4FQWwUcYjACGJCIIDv3v//r7YSlEZH7e6z3/ZsnaMi5F5uPVKpv/7+l/bX/wT/CYJPrNXuKKquq4rU+mzpXXhHNWeLJdjCMpTvU7RVa5lvD8fT6Xgo1zNN+iZeMhbl8f1ip83S7HwL3zHX2/emHdbD7zBI5vpQ4cq8EnI6LI32l/EtbSnwp9K3X+zkBBervFwoX3fAKgU+t1/A7PL9gF7s1dr4cirUpZBdCvzLS3LaOsCzmn01Ci0zFwJWFf5ldTr68OMvepcFnxGcPbgQQBC4M/5Sqx7L2rO66kDh/hYpPCUV3oF/x+RM0JJ6Rn/Qe4xvGRNLrQjet77A5yeez5XDXeho1jwIxk+C0dLdcDIpTxVD4vvJtro+bnNLkkfzKGVkJj8JgDKnJPCTjYCdjsfTpRaPa00euoAv6FOCzhgXjIZ+XiNrgiHgKQOC6TMCeUaKosiIvxEFfOBfYjsdtss3krGiSKNnCiAGILIoWOxvD5vEhxRuVxCS48rP/YA/KfDEeLK3JSsuxLIscPwgClflNnH8vEwQ8oKUP8qi6aNN0ZJkuTeN0kIYRQEEPPA8FMVeEOE0zTIuLn4kQOqZ49l0+mbHFUFBECkYSynNWMp9z2IPhZTFE62uw1a7fbmW1NE8wITgEIkY8DBEHhfDQEZI+V8UYaBwX826MSiGWfW6liIqJMVxjCJ2JoBUCC7q+KsgK6hHaIAce6zKtQJZM8YmMEj6jBcIx0cIkeJiFRO2k9KnnC4IKEE/TFWWpLOIjt7/YSrycE4yWE6AIA6dsJLAaB1NyEcGNzGiWYCCwJ3+/m32OEXbGOr9brfrUoCwjOPjOPAy8JuHjBZnpjjmvlAvyCJEGV7lm12+0IFBGmnqqFfhLwRRiDDNiix0nPDDGfE4iCiKGfbyPVi5gGS0zW5X1+bndWcFkYdQQEIPRyFuEkCECEEQhGTHCfY5L+hOr6eMY3ZeEV8MR8ijdTLqnOCUhhStdvvNbr/b7Ja6SKDmpqx+RQWHyqH0Bi4KgtexU+5LP4fPJrc4QXsU1QsgWMCB0z+xtaUgYOfbQOAk5eJj914YCMbkGR5SCgKQX+53yWojCHrzJoDdOn5r2BfuQwx5EDiBOs+KT0BNI36VAm47oUB1s4evvXOfeiWH5mvI5eZMQGALQuXcsSy7poDyjOzVZr9Zz4zRMk+syoWIp47cYeCJZ1d46tm27a8XptKSNMsSx0tvEorck1s4g8KgGbvCI9tx7MFQlUT7qkavztiLKwm3hZfyHta8SeGMB5sMRs2mDF1Y+BCnt/qFMPxxG3aiF8YEBxP9alSRZ5UE2hQPr7tsi5qBpQw2KXYt9XrU+aXPwxsCSkglQPjWyASjwVTv3B7tv0w3ipo7gGLYTzXBlRPu6N5kIFuoiWccSy4uNKVRZ3z/TFNmcdbUKYKH/yRIXf3+ZNI23awoio9uzj2vo/jBTR6eacqEN686WixNGTuHsbG7s8B8NGpKI97KCWbNjSkYqhKvTtto8nA04n2Nn4Vx9bqzFEhn1a6hI6c09uzh41lX9CUWQzvGhKYfvlQvTz3kQBW62uPhrmUGgILJ5m0wgbVBCIWBMZSHKAI677/hjM6fzcrQ2ao49wwoq8Bzfk4Hs+5oIo56avVA4eejFcjFM1mZwImWeUNZ7kiSEXEXsCWPcEGsZ6Nyy4DWlmWwqDOO4MLV2tyg4aU0jUYdI+LPHsdAUvQJ6EZoMBwOHA95Nj9zu93+W+BAExkMuy5yBoam9pS7401L0c1uvz8Y/AB7ff15ba+vr/z+oN8dDU29uZv+AXW2DHCu0No3AAAAAElFTkSuQmCC",
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
            actualHp: 144000,
            actualAp: 10800,
            actualDps: 6113.22,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
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
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "冬の祭典 王位 超極ムズ",
      baseHp: 1000000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
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
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 12631.56,
            magnification: "400%",
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
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 12631.56,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 12631.56,
            magnification: "400%",
            count: "1",
            spawnTime: "8.3s",
            spawnTimeFrames: "250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 12631.56,
            magnification: "400%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 12631.56,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 28800,
            actualDps: 6496.24,
            magnification: "800%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 28800,
            actualDps: 6496.24,
            magnification: "800%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 28800,
            actualDps: 6496.24,
            magnification: "800%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 10989,
            actualDps: 18315.0,
            magnification: "1100%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 10989,
            actualDps: 18315.0,
            magnification: "1100%",
            count: "10",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 10989,
            actualDps: 18315.0,
            magnification: "1100%",
            count: "10",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 10989,
            actualDps: 18315.0,
            magnification: "1100%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "60.0-120.0s",
            delayFrames: "1,800-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "387",
          enemyName: "ヒウマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAAADAQEIAwEKBAIOBQEKBwUOBwIRBgERBgEWCAIWCQIoAAAYCQEdCwEbDQQfCwEhCwAuEAEzEAA5EwFBFgFFFwE9HgM3JAdNHgNaHgBdIAFmIQBENAl2KgB5KQF7KQGBKwCDMgGUMQB0TQGkNwCtOgDBQADKRACTZAXTRgGxXAOkbALjTADvUAD4UwD+VQC6fwH/YAHLiAb8cgL/eQL7iALdmAH5ogL/pwH8vgP9zQX+5gT//AP//wHBq71CAAAAQHRSTlMABw7KLSFLFT5XuWSECXafk63s2jC90vkORsju3v6O6vT+3Mb9B/X//fPd/v6P/////0v//v8D/xz/Df////8Bcd5yRwAABHhJREFUWIWdV393ojoQFcpPQZBaoBUoxGZN2vQl4anrurbu9/9WbxJ19+3ZlZrO6R+eU+7lZubOTBiNPgrb/vCR4XCcz+Gs8w/XsYaeuwR3Q/8PKhN8kGbuJ3Dn8KO8zc8KLN9AgmWrh92kpjQ/K/Cj4P5qAtvzrJGd1Eyy+d2ZNJ76g6DfCJJx6Ds5lT1vk8nIghhNkvnD9QRxWSTJnPe9JEUYeFEUesHjy+P9l6/XEUziji6K+hkIBK7rBURdt+uXx4ev1zHcx1iI56XoITgTsl+J19f127p7/Pb9xGC5dwM5tZIOwFL/qVhtNoA/vK+f/v1+ZFAO8S7X1Yo6eG0vlASp8Nvt7v1wOOxf/zlJcLK2ywa6I6oggT3BhPEjgcYf3nYvIOGHKlPLWZVcJvAKBgS0LBuEWb/abt8U/v1tvz5KcOaslzi9TOBkGOSzEhGMEFttd5oAGEDCty+TSdTCv2l+CW47YVZSKTlCQnBCfhIc3vavjw8PUZxjyBGdXcKH46LuQIIkDZxEgILt/kyw7p6eFm2rBVYXCdJiySF7ApeIciGgiqcj7PcbzIXkdJAATBLNieylxGUDhRCr1UZXAfC7jSoLnIsPEYCIqbYhawhnXCgjrXeA3u22q5XyhlQ2GSKwkoWQ6gyIUAq/gAHMtN1uTnjt0CECMAKFJgAJJWaUMrlSFBvAa7BQAi5XQYWbVgTOKRhqGkS0HXv1drFsl0z315AP1BmcdFYS9TJK2KmllPjnPEnndad8OuhEPdDTlv+vI3WwOrJtN8oVNe/iIQIlIuv4b3DJ2lTNWNVKKgXeMAH0/LhjeqgcdQhapcf1FMxpL7r0wyFreVmNKQfrAV7QrohP682fdowUAwPl1ymirKgaBI0lSDmbBvZZW17NkqumvOV6SXqrfM1IN8si9/hWO8ySq3ee5Wad1PZ9bos0ODE4128ZmJAVNIR24HM9NEovhlNAU0lNAQymFw3Lt920YUIwMAUnpem+t5w49mJIgiSEEYSQkQLLCcK4aOdjZUmq2wq2rcFty45ndbvktNIjFkMipKR5YKAgbsGHXCBFIHQWpWhjAwnenEugQA0cQeq+gHWdG2TBTZdCEZSqjKotKEGlSRqtcK7mOmowFbzRgerQxEpwUesYa+C6IGE2Eco4X0QGeKVh1lUV/TmapFxERma2gmmaVmqKHoe5McFo4jtpBQ4S9Dhc5SI0wisNBWOwoWDPKwa+MDCSDnvaKQ9xuCooK1ITG+hwxw0DPIMyAAXrTHrhTAA9hNVYg26uTFrhRJCDlzjCXC22PPaMP30CuPJKNQooW2bBJwZa2DLBYUeXt9Wn8KOoRBgjthxHSTR0vb1M0BEC2a8iN8nz67fBrwgXaibQwotqjOvYYB+c4i5nAi46VZwuMaFz4yqO/HRJwAmkyNqyYa1ZM6uAhi4xDKQun90iuGEYE4z8ZNzCbmPLDlFIhTnByA6yCsFk45y1Bp9uZ7Truk44vsWYQDlzzze0shXE2fjm5mZ2q+MmTf7+Ef4f3iDEz+RFBwMAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 248000,
            ap: 54000,
            dps: 5294.12,
            speed: 6,
            range: 800,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 306,
            foreswing: 39,
            backswing: 27,
            tba: 134
          },
          stageStats: {
            actualHp: 496000,
            actualAp: 108000,
            actualDps: 10588.24,
            magnification: "200%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 1200,
                ld_range: [1200, 1500]
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1237Data;

