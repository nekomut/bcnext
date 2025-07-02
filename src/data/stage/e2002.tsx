// Stage 2002 Data
import type { StageData } from '../../app/stage/types';

export const e2002Data: StageData = {
  eventId: 2002,
  eventName: "ケリ姫ステージ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 2,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ケリ姫登場！",
      baseHp: 3000,
      width: 4000,
      enemyLimit: 4,
      requiredCost: 15,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1002",
          treasureName: "キャラクタードロップ(1002)",
          probability: "1",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8800",
          treasureName: "キャラクタードロップ(8800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8200",
          treasureName: "キャラクタードロップ(8200)",
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
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 100,
            actualAp: 10,
            actualDps: 2.83,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "20.0-50.0s",
            delayFrames: "600-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "027",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 8000,
            ap: 200,
            dps: 39.22,
            speed: 35,
            range: 109,
            rangeType: "単体",
            kbLevel: 8000,
            money: 1500,
            freq: 153,
            foreswing: 4,
            backswing: 97,
            tba: 75
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 200,
            actualDps: 39.22,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "666.6-666.6s",
            delayFrames: "19,998-19,998f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "026",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 300,
            dps: 48.65,
            speed: 6,
            range: 112,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 185,
            foreswing: 56,
            backswing: 56,
            tba: 65
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 300,
            actualDps: 48.65,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "666.6-666.6s",
            delayFrames: "19,998-19,998f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 100,
            actualAp: 10,
            actualDps: 2.83,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "ケリ姫参上！ 上級",
      baseHp: 50000,
      width: 3600,
      enemyLimit: 8,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1002",
          treasureName: "キャラクタードロップ(1002)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7800",
          treasureName: "キャラクタードロップ(7800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6700",
          treasureName: "キャラクタードロップ(6700)",
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
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 400,
            actualAp: 40,
            actualDps: 11.32,
            magnification: "400%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "20.0-50.0s",
            delayFrames: "600-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "026",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 300,
            dps: 48.65,
            speed: 6,
            range: 112,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 185,
            foreswing: 56,
            backswing: 56,
            tba: 65
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 7200,
            actualDps: 1167.6,
            magnification: "2400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "026",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMGBgYGBgYICAgJCQkKCgoLCwsLCwsNDQ0REREUFBQbGxsgICAhISEjIyMkJCQmJiYrKyswMDAyMjIyMjI0NDQ1NTU6Ojo6OjpBQUFGRkZHR0dPT09PT09SUlJdXV1fX19jY2NkZGRzc3Nzc3N1dXV+fn5/f3+IiIiQkJCXl5eYmJienp6np6eqqqqwsLC2tra8vLzAwMDExMTMzMzT09Pc3Nzk5OTs7Ozz8/P6+vr///////+qTHStAAAAQHRSTlMAChTlMPs9eB0mTcujWos7uM384GYiTXiN57L80/6l4v5xy+/+mLr+6dP//v/+2P7/5v///+z//v/+/////wD/72Q6DwAABKVJREFUWIXtVll32jwQjQkNS9iSUNY4GCOQI8lIkYRkefn8//9Vx7hp+wA0Id9j5/gcv0h37txZNDf/fdFu/gH8A/hfAD5ozc5HT56xbs/7GkDz/u6m0/gCQPuh57VaXwBoPCxb3fsvCNFfBg93T9dT8EZ+MLqbP1ytQnce+IP+ctm9FmDg+36v5fvjawFAAn8+mPv9awE6TwEgPPlXl1PjfgkIj/78ChGOwkMZBL6/fPRHny4FbzC487zmw9JHmGAfhcPPIvSX817vKUBYSKUY4dPPeG932o32CLgjzOA6GGXhJ4KY7N/24Wjj+4GgVBwBJMGzjwNsda5xrHDAVX1bChbT+d2HI9gqShMNTtVPi4MAy/j5j1xerAtvx5EQGAXkHUAijLCkq8n7ke8X42mHjEEP+EjKdwSMcUAEer/2fbe7RGC6cbnBSz+QgCBrBgFBAfZHNfPhq12fvd6YbCOqNUHLZcAQEUcEyVmAAGHerI5M9m7fPkt/d0jglmKBH6hMIqAgYoa4YohxjmeNG299KNx5AhOb8CNrQXBWFprGVBiMuTgWlETjBtwv9t/PAqxTQ1INZxOts6wojMnKVCaIHTMiRbTQZXmBgLdLCU2NUi4VziU2zfKiNIpIg+Nazlik+XkFbjqvMWbOKptpbF1ZpM5lRcxFHiuBaghO4sWZMvIm6x0WWZZbZTLwmpa1udyJDcMrQSsI4HAOYPLmNOXGWi2VFlbkPwHKotQb7cI0q1nQcyN2awSpe08IanOeZzVEkRdFkrgwUdGCUBG/nHkl2hC/0Mo6aCPO8lKmuQMR8zQtACQRC0RVmCSb2TkJxxvItXFpCkQUS8tEpgWQgDQczVJXuNAdzqTQa49XwoD6ziRWYMlcmWDnfskAlprssKCz0wIOd69YpFrrxKWSUCJYmuPRW+ay3wBFZl7DaHLy/s2MIJO4uvUE0pJTZ1D0bIpagErIqi6t2J4m0H1CSKcJjJ5YCk6zhDIa9l9WyJV5lmaVCvkxmsPJ4e71N5RzVVUwjwkkCipQ4dV0Ovc3rvzT3PZkBseR1NA/WsZKWSuQqQJmBD2vnvvbQ/FbBLs9mcFuJKF3rIZJqpRJtCC6KBMi43Dc97zJPqkhCrdfn/Lv9UOQDnrGKMx+TkBuCghJmV3lsL3evR3s4W23PvWyeMMX8K9VUglAKgYuMcZSG8Pfyvo58zqTybBzQn6vM36JoXRBfdBAQNQwAZMk0/AOcFMlJbrwnHnD6UsUw+AxqVWSYcKtDOA50NZUo0tWP0UvbCZ3q1iaBPwKGRNM4BXlWDAkQMzEKiQNRGPYhd3IG68wpQQhJrTJCoUYE1UfqyqVEoJR2uro4mLSHITcwMQqDbX2bRXDyORcCFgHZDQKo1hItvjLftgZb1/3+304m06GzZAEi+l09jJH6HncaDTHL4vB+eH5K5AG7BJ1giYRq1rV60e0dux9cjPzZnFUaeZNYzo7lfW/WieU0XTYHi+oiqPFoPtJEG+y20jJo2c/wKAk9PN80f8ohNfst3rUIs4ZJZrCZvn4iDBe3ra6f5exskbr/vb28fHbt+pb+stvtd3e3vfOFsIPVm+MKU31Pj0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 300,
            dps: 48.65,
            speed: 6,
            range: 112,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 185,
            foreswing: 56,
            backswing: 56,
            tba: 65
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 7200,
            actualDps: 1167.6,
            magnification: "2400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 400,
            actualAp: 40,
            actualDps: 11.32,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "666.6-666.6s",
            delayFrames: "19,998-19,998f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "026",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 300,
            dps: 48.65,
            speed: 6,
            range: 112,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1200,
            freq: 185,
            foreswing: 56,
            backswing: 56,
            tba: 65
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 7200,
            actualDps: 1167.6,
            magnification: "2400%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-1.0s",
            delayFrames: "2-30f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "027",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 8000,
            ap: 200,
            dps: 39.22,
            speed: 35,
            range: 109,
            rangeType: "単体",
            kbLevel: 8000,
            money: 1500,
            freq: 153,
            foreswing: 4,
            backswing: 97,
            tba: 75
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 800,
            actualDps: 156.88,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "666.6-666.6s",
            delayFrames: "19,998-19,998f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "ケリ姫降臨！ 激ムズ",
      baseHp: 10000,
      width: 6000,
      enemyLimit: 8,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1002",
          treasureName: "キャラクタードロップ(1002)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4600",
          treasureName: "キャラクタードロップ(4600)",
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
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "2.0-40.0s",
            delayFrames: "60-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 16800,
            actualDps: 3574.48,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "029",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 803.57,
            speed: 6,
            range: 130,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 112,
            foreswing: 56,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 12000,
            actualDps: 3214.28,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-20.0s",
            delayFrames: "2-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-30.0s",
            delayFrames: "60-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 2200,
            actualAp: 12000,
            actualDps: 45000.0,
            magnification: "400%",
            count: "4",
            spawnTime: "258.0s",
            spawnTimeFrames: "7,740f",
            delay: "2.0-8.0s",
            delayFrames: "60-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "029",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 803.57,
            speed: 6,
            range: 130,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 112,
            foreswing: 56,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 12000,
            actualDps: 3214.28,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-20.0s",
            delayFrames: "2-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2002Data;

