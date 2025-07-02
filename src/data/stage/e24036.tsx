// Stage 24036 Data
import type { StageData } from '../../app/stage/types';

export const e24036Data: StageData = {
  eventId: 24036,
  eventName: "ことよろにゃ強襲！(ΦωΦ)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 36,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "寅年 Lv.1",
      baseHp: 2022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "寅年 Lv.2",
      baseHp: 22022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "寅年 Lv.3",
      baseHp: 52022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "寅年 Lv.4",
      baseHp: 92022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "寅年 Lv.5",
      baseHp: 162022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "寅年 Lv.6",
      baseHp: 272022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "寅年 Lv.7",
      baseHp: 402022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "寅年 Lv.8",
      baseHp: 552022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "寅年 Lv.9",
      baseHp: 752022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "寅年 Lv.10",
      baseHp: 1002022,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "595",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAIBwUDBiETDQIUExQmHAIfHx4YID82KgItLC9GNgE4OTxZRAJKSkplTQFSUlJ0WgNfX1+HawJra2t6eXqefwG3kQKQj5DOogKpqardswHvuwG7u7vuxgH/xQL/yAL/zAH/0QH/1wH/3wLR0dH/6AH/7gL/9ALg4OD//wLt7e309PT6+vr///////+9Wj8UAAAAQHRSTlMAGy05R1ttiJmms8DK1ufy/wv//////////////////////////////////////////////////////////wD/pjvjHAAABnVJREFUWIWlV2uXgjgMHZ3xha9YeYwIKoIgoiJQAVGX//+vNgV1io5z9pzNFx8lt8ltbho+/vmf9vG/Ad7YV0vo9oRW7WWh1u72e53mO7+7+wBKI42nlSb+KRKA4fNCxToAsu16nqsDVPdCf3Prb93588KTP3FomjEzYTDiVuoAbkZjXHAB6u/8myBuU5q4c91J02llJwHszI/386mTOdB5418bgptGVIfxGAx8TuCWQI6i2IPxNxipPHgbgJ4G8RQ2eb4Cj5L+z9IX+gWRqOX5BlwTPn8HEMBJYhuOOdr3PJE5gCaYGbXhhCuqYcPX7wAD3DaefjP/fDnJ5EGr0xW63W6n1ehgTplRLKmG+Y7FPnhxrI/xoWu+Jgaeu8wO/lYXE1vGDPLz2J6/46ADZhp5sMbHThpWjeHZhf8PiLphHIjCG4AGiEEcm4iwYvUU4EEwX1KEcUNRx6YNb2uxSyZBVrgRG+vJRgfdcbdRHDrTwt3DKprI3Xf+H6M+iE6KD+lRGlIPYO4lSZIFjqFPRQZgup75Zym3GHEAdkr9IJ6Dl1GfUoPngTiu+K4MmL9sy0DcLPAPwcHcJgef7vGPqT4pMRjM3BMrKqn677PA3cfBAc2nkR+Gvq67BxpHW0dnAUy3W912of2rP0ppn2DokX8oLAgOYRLtszRJE0qT1GEsoiK91IDXdoOCJeCkN9/C/DChrjkFIs/tbRyHqPAJDQ5xnHi/8tiHaRzy/lHiIPXj728UJ8hukkYIEKaeCM70lxxajHwuAJ8mSP/yVCjjtBrDZJ8Zcorhq9/y5LUjfAIhW8rvH+uglu6FrQGcvYNtZp3vAFovAAIUCd4tCJM5zHLeLhpKejJGsR/hVc+f7Ig4AD+1Qftx3hQ9YgUiNoszArxmILAKiR8APnYv6foDoBYSxTR2+ZVop1c11aECENwa28OuWpHP9ZSfJTieXwFaVYBD4jwRgJsvbrEcMYUXgOI60n8iwAB2j93Lj93mwcYrwGfZsx4kopLVn81PqnLkYpnBSnkGaJVSfdRBYpak3T14uA0QSXquZKEUqp3eaoBOgNtzCTwhWEWa9BxBf1J0LD0JWRJB5MM3X0HW8sz93KyP5CmC0XBetk83KcRAXVjmf9jpWYw1MkmmJY0RA4gdnoKKnS1Fmq3Fdv3WEEaf9aKMCN0XTc/IIj84oAwfh3g/xetubWnqTAJJKdtjEQQbR4QRq0MnQ5njipkmCDBnHFqqtWJnf2IEXC/r5XKxlApyl7A+akxPjQKqzQCMJKZz9mvibAMUMup4gb8UFjTH4AYUa7XAU72eJeFjVI5DA7z8iRyEUeKZ2P1FlyJA6XTF+K1KTe8k9Fhc8JvWK6YmtOHHqKgBP6ApPfhBoaQi7J1m5bliVWm8XspPBGiXAHhRDTEESn0mwyg4BGUEGtsLAZ5UdT8O0v7olhnUWT9FFtKyo4ZhgKdwYrEXR2FxJ8LZCgVVArRu7QSHKIrhB1G8xymFO0aVXesSCkBR1MK0xWyhEbzi24UC+g8xGT6Nsf0bJl6vKy7plcJOX5IIKSuADZt9tm8Tv6IIOjc5s0qcG3iBefGe74c56yZce2ZyKuuwBiLe3jILpg8/5iYHKo+vPIAFlwrcvanjSIMFSMiw3ny4i0xQyCLfEbGmqnD3Gas2FA2sHBwIMAKx5CFkgsSOVMlhVgFY/tzuDcaIgVMRfuiuYdjbNCraGqphk1/fAVTmRyKnOBThWEKiLE6ie1Pcw5iTAJcCK25+ysPkDRyO5dhg/Yi7mBy+D1pwOp9Op/P5crkyEvk583PA3iKmWSIjo9zdmJqgXm5ZnFXgjcCg0pGYJMQ5m2CcLPTvGCGehHLLYgWWtbIsCzvCbKZhJSrVGafWur/mmEkS3IYbP8IYbod5qRQF+0MdPs04n02h1+1hKbpxGtMoClFSlJGrnfLfzPp93G4UI7Xjbf0gDKOIZiHmtdg973+9HpU34/aoNSxYIjLaZDqd60w+0gIJwNRny4VCFFWRyF/Dar1LUHuP+RyGaIMBox61SFDVYr/f7/315veJzG2GXThag9qoViur9gv1fYTecJdr7yftu3WX+azzMbA0fpBqS7nV++gsT+/edkoKavWvxpegLKDHTrbX69+t2yMq6TcEIg2/6vXam1G5Af/V+r+/M42+ms1WuyPguzfuPUAb3ox9R+p6XaHTbrWajXoRwr+aQ8WFQdt2fAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e24036Data;

