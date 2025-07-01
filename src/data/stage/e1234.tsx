// Stage 1234 Data
import type { StageData } from '../../app/stage/types';

export const e1234Data: StageData = {
  eventId: 1234,
  eventName: "大乱闘 春イベスペシャル",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 234,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "春の祭典 序位 超上級",
      baseHp: 300000,
      width: 5500,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "100000",
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
            actualHp: 1200,
            actualAp: 120,
            actualDps: 120.0,
            magnification: "600%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 135400,
            actualAp: 2555,
            actualDps: 8516.67,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 75000,
            actualAp: 4200,
            actualDps: 1247.52,
            magnification: "150%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUHBwcHBwcJCQkLCwsLCwsLCwsLCwsMDAwNDQ0bGxscHBwgICAhISEmJiYqKiorKys4ODg4ODg7OztGRkZHR0dQUFBXV1dZWVlgYGBoaGhra2t0dHR9fX2KioqTk5Obm5uioqKqqqq0tLS+vr7GxsbOzs7W1tbc3Nzi4uLo6Ojv7+/29vb7+/v+/v7////////5H8A1AAAAQHRSTlMABgwUGyUvN0PkqcvXUW21Yn52h5Se7MP8q7b+xOrP/tf+7//j///v//L///7///7//////////////////wD/cVkJCgAABqpJREFUWIXtV9l2qzoSDZ6dxEMcO54DBIOxkJiEBBpo/v+vurCT4ylJn7Xuy33oerC9sGqrVLVrq3j4zz+0h/8D/BsA/sqMRrvT7bSbxsNDo9Vutxp/5/ZljfbgZWnt3kfTcW8wmS2Xs8mgbfy1u9EejqxDRKlvB/v35w8cReRgLcet3yGMo8GP1ni5NcNCldwnRZ54Nim0FBneTrs/IxjN7mAMNui2ulMLp16oqjJ1aVmpInRCWQpK7O2s/XPQr5vdAWy3mW0OVAqfqEoSVFRVpYvASRX1URjtJs1v3RudwXRLWCFEkaE1zlV1AkiorirFiWsHQrBCqeS9+51/c7jZ7XFewm4qse0MvGSAlS6VqrRKPS9OENVaSsX3w+/K2ZkjJhS4VSXzXRdlqlK03ryOX4aEKUmIEhEO4/3r/RmMRm/u58fVpcB+RpEH25VldTItJCQyDgoZB75nTu8Amr3J6gPx42KVuKnSHMdQAUA4YcC3Eili8FkwvGzdpm/yvg+ZOMYLdccC1kuhBU2o/Iyh5FHgO1mly0rHq2sAYzD6iIExp71UZCMqNSCkgeO4qT491jTAyEk1ZOkOoDF584uv01a57/leQLWIvCBJ60KeIlBCMj/mYSoknl3noP1oJ+orUg3Ey5MgEpEbFapARAKH4DRCa828iGM3SG7KaIz7Dv8TgCQQDVQ784jgMXEQLbIgiIIgjUNkhlKkvr25JlJrtvDyixMA/3UlMWIJHAVjhFwvcD2ghuuaTixE+nFDg/bIyfSXf5nZJIcUci+MXcyELDIMTxjPKeMUgBKC3ns3NbD+ZACSnaxtH6cycyPfT7g68spjQKmy1KrIKSfrGxp1VnXZv/xV7EYhwnnmxshx/USWihG7LgXwEogFmfwYX+lBY7Jn5TkAFflCiVwxN2Y0xV6ieOA5XlEplp72KXaDK4DuHPPzCUoAAEroSgSBKEtBUC4Zi72s5J4ZHVtN7K8BBn07yC9CSFwGh4WmdxOpVOozmasMNInZ60jV6+RhcskCY/y2Ds40hCo4cU5DnBXEw1EIbZEBHwFAxuFxn1KRVe8ihNbUDvM/Rax54DnAZUyViBF8M10Q13GyEnRFf3bVYXkhq63pNmCXACq0Cc1htYZcFgUHIU1sX1ys0Hw/PTeT0RuZ8SVAmUHmy1qMlJaKoURp6kaqukRIrXMeWxOLXOSwzjJGeampH4GOMiBRyhC6XgHU+qMozYkVi6t/Kw1tVGR+wKFyscoD13eprq6X0K8QjMF7LG/+rSUN+4jVXCBSJeaaqPJmiTh80rk1w+L2z1qCbTsGgZYgrom/hhLcLUlODQV9dBvd6YyR64F6x77puIEbyGvnWqHhajjVcJ+r8h6ilFmEfbAgpLzWh+v4w0TBGWqA3rMD2lXdRVgrmyw4L6QuBYr01QItiRslzuORxv3Fwgeq3ANc7IfITQRljkGbjgDd0WJho1h973oy0DZx80jLjOLZqQi2s1jgu0JerU68C72ARgdNgSuWvNZaMrYS6pjfFeIiYFBHeU5TKTkFS/bjug02RBbIgUv0twhk6KaylkTYvZY8D+yo7I3B6pBr7q7Jr0eoc+aRjDN2TLbK0gzMBSZ2R/sM1GK9Tn5NYo0Qea7ngsjXlNYljBzHXujMPvDBel7Y7Ncy1ggqpykl5kfEJUwsoNNHQTA6k+nr+PUNFXe9cg8B+6bb6WqHozSj8f5TkoxGozGeg/z9T4AaA/qnM56u3i1r89I5S1pzYCGm6jKd0nx2uAVIrS7MkTA6d9tXN1N7tMVZPTVwBjqoT0j1h7w+mf5huIPpbraNslwW2CFxQgspYFCEaUXGaX1Ll594mvurHwbUZnceED/wzMXbdmvDDOZhFOc59xEHgsCFyiGDcEdvJz/N+o3hDthgm2+vg5f+er1YrNfb3e7gmH6QKZZFAeMpMp9ffpyQH3pW7Hg07g+M9qNLoL2eX8bj1+l8sUAsjJEJzbt4HrZ+9H9oLaOUqWw7NozJoUiRM+8YRqM57pt24DrbPrS8v+n87P/QeD3AiMg/4JADi8FgvzlG216hOA6205dtIrLd+JfXDGO8h4G+8GYtcEq1Tk9DVGN4yJUg094mUjDZ/XIESEJWj1WjDgSDZcms3tdjYPCy/bIvzlfJtxF0N1EhcjzvtdvDHWWJNezU1lsRnqdWD26fAvrn+7eM+jVlMHlyEPLt/mg0enpbm+ai/3y0t7XjOG+jx77teebTsPf9KRq9l9njaD5/Ojn1r61+9PT0NJ+PHqfDKyb8F2E4dqTZA80gAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 300,
            actualDps: 169.8,
            magnification: "600%",
            count: "10",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 75000,
            actualAp: 4200,
            actualDps: 1247.52,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 135400,
            actualAp: 2555,
            actualDps: 8516.67,
            magnification: "100%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 2299,
            actualDps: 2874.38,
            magnification: "350%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "春の祭典 中位 激ムズ",
      baseHp: 400000,
      width: 4300,
      enemyLimit: 30,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "300000",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "5",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 270800,
            actualAp: 5110,
            actualDps: 17033.34,
            magnification: "200%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "2.7-3.3s",
            delayFrames: "80-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 270800,
            actualAp: 5110,
            actualDps: 17033.34,
            magnification: "200%",
            count: "20",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.0-7.3s",
            delayFrames: "180-220f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "3.3-5.3s",
            delayFrames: "100-160f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "春の祭典 上位 超激ムズ",
      baseHp: 500000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 120,
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
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 3200,
            actualDps: 16000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 100000,
            actualAp: 5600,
            actualDps: 1663.36,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 3200,
            actualDps: 16000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 100000,
            actualAp: 5600,
            actualDps: 1663.36,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 3285,
            actualDps: 4106.25,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "春の祭典 最上位 極ムズ",
      baseHp: 600000,
      width: 4500,
      enemyLimit: 20,
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
            actualHp: 240000,
            actualAp: 4400,
            actualDps: 8250.0,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 406200,
            actualAp: 7665,
            actualDps: 25550.01,
            magnification: "300%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 3942,
            actualDps: 4927.5,
            magnification: "600%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 406200,
            actualAp: 7665,
            actualDps: 25550.01,
            magnification: "300%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 150000,
            actualAp: 8400,
            actualDps: 2495.04,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "180",
          enemyName: "ギャラクシーニャンダム",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 144444,
            ap: 4444,
            dps: 471.1,
            speed: 2,
            range: 600,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 283,
            foreswing: 104,
            backswing: 29,
            tba: 90
          },
          stageStats: {
            actualHp: 288888,
            actualAp: 8888,
            actualDps: 942.2,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "春の祭典 王位 極ムズ",
      baseHp: 700000,
      width: 5800,
      enemyLimit: 20,
      requiredCost: 150,
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
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEOCRIcESUpGTYyH0I+JlNQMWlcN3tpP4h2Qpt/SKuFULSPU8KWWcqbXs2jYt6raOi2bvm5cf69dPvBd//Ge//Mfv/Ugv/ciP/ji//ojv/wk//3mP/+nf////90S7hYAAAAQHRSTlMAk6O8wMvT+AAGDBIaJCw0PEJMVFtjbXyBhYyaq7Ld6PL///////////////////////////////////////8A3JrhlwAABRRJREFUWIXtlld74jgUhiEQOgkJARKKrSMXueIqW7Yx+///1R6ZhDBDMrOZudmL6ILHqLw+9ZNb//zlaH0DvgHfgG/A/wcw+PWYLNadzs3j5xt+A1j0ASgF6Iz+DLAGsIOY73VQJ38CeAEa8r0fV8IC5RMbfgWYAuXcdhw3zksT1l8H3IJfea7rOiHPE0qGXwXcgVlyz3EdN+JJyeDuq4AHcAoeua6H55PChdZs9TwffwHwCGHsJEmcJvhTedAMsvrvgBZ4mR9n8nyScx00yw9sCrvfAEbndD0Cq4QQPE44FzqYeVlW3Ddh+wvAw02PkM7T6c+4T1POLJ4lSWkDK/PIT/f7QoeHTwEbAM00ALanjC2ooQEYeZrHoIksjTGlYRXC7WeALegeFyIw3rZ0ADwX4rq2ICjiNMs8O8jQm8nHgGdgRcETXhQM2s3MkOh1ApbNZEnyIORYVH5hwfJDwBSMIpMRT3OhwVROzcA7ujJ5VOc8CV3X55Ff2CBTOZwtVi+rxwvAM5qZNCMu96fK39CkMnfLxRZomqaZb+2zlKMF60V7q0ouwNMZMFINkZ4AuJn25JxilCFgQBcAfpnuncDdc57r8qhp2/gnNZQz4A7sVwMQwHXZOhOwj3YX13ZUZsEO8zhK0DrNi/PDsT5UomLkDLgHqzidTlLONRUBT9iNRkuCfBvrCGuS8yLXID9iPCxmGroGmzNgSvUC607I0s0j2ODUEgKhYdVstWMAoEcFboh0YI50gnRw3CyHZ8CwA/ugaT0hMPSPDWAvtO6mBdHBoDv02zJpE7ne/F2e3rMwO7UbBV1nWtMxS/AqLEXMpQ0vg1kbBRY0NBvU9mJ6BRgr4GZ5muyZrN/bBTb+HKyamTbEKcik3PUhKAvBA4dhuZP13Y+ALnZ/EKR5VdfYc4ySxWCEsed5oVOqyheqNMJmijO5I/UYNvb4AvAA7pFJF3TmhvnxkFowR1V3BS9NSuT5Fe4wpRMmswNeH3MbOhcARctRdDTbaSB2eDjqPfTBEIUHijw/7uMOBovZ6kbBSDEvR9zoDLgH+8ApUVlaOaC8EIw4XQ4U2Bcp9Jvma4GDydyciq7VkQzafbfgBVNlw91wh9tSfT5u9XrPSDWK19YZDHo0rUx6lvb75x7pTd4BxCxTKl16oWZtK6fJG/CL3KCNEE+B1QEm82KMLrLwCP7RgZl8nKOHJ00bg55nibZ5NXFfm+RK1N8AbZoWFE6X+HA+e4sLKzinpyutq4kE1Ovzr4CdKbhD+z+oJebAKVKMgdSfUd8sEwa31zdsAxiqlsgOEf1B7KTVIhMogfcyBLYQtd9U5AeACVhlFNYhKJdLGwiFYR1ieivVwin9CJts9yFgismzIMY4zi+WOpqIUYpwZYruuLVBU6yd+48AC6wCC3Qh6IXkT4iJRNCqCAWyDWFpgH6IfrqXXgGKLrimENm27y9YgV8zKQalcTtW9AKtwRkTxteAGWpfANO1eYguvkNUlEGtNQCvZsoNNpILD1uGv3fXgC56wNTBTMtTevO20EYd8dEg4tayS+ODqQ6WehHC4gowQ3wMrcEEX0nfoiyrqGQYksaxxsQnbCge//ythICehpcFGQ2mKB+0O2rGuGdUeGY5mhCZBrMsdCzDFRX8CjDfNDoJKsGIa/A2qOFYtHnSUJE0KXO4gxoGClHrMpWtxfq53el0FUJITyWk/wogzTg/EKLiDrWHUr7ZvcwuAX/7sf0viO5AtjgVgwIAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "309",
          enemyName: "ヒツギイヌ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEBAQEDAQMDAgQDAgQEAgYEAgYFAwcGAwgGBAgGBQgIBQoIBgoJBQsJBQsJBQoJBg0BADwLBg4LBw4NCBIOCRIdAB0TDBkZECEZEx8bESQeFCYiFC4jFDcmFjMpGTYtHzc4Ikw6I049LUZDKFtFKltIK2BDPElQMGxRMGxXNHZiOYVlPYpsP5JzRZx8SqeDSrFqZ26IUbmOVcGUWMiYW86dX9WjYt2pZ+etae2ybPS2bvm5cf6bmppLOzoxAAAAQHRSTlMAAwrCHjFaE04naeKrObtElGF0BX/QnYwJ8qkOuf3GJenU/+H///Xo///v//7/9v///v//////////////////ZycUkAAABQlJREFUWIWVV9l24joQDA6bzRJCWAIDXGw2jxe0jGRbluT5/7+6bQMJmSSC1APH4aSL7urukvzwYEDNql0eX+16zfSvX8LqOfXT04vtdJ2fEtTqw9W4XUW9Ps0PwcD6Ybw9OJBgWka9tFdHQeetnxHYkyDTpFvW0FgcZZEs6j+Kfx1CvOZuz7Jao0Bona4aPxGh1lvRhOB4PXCc4XiPMTyO7B8w/Bqu/e3W85az9Xq99LYAbz24v4j6yN1uQ4pKkDRNsxLJYXSvjq3hhjKUKU4ZZXlxQbJ5vq+VVtPlAnFdyITxTL0RaLp6ukeG2tOK5JiWgVopXbxDHRd3tKLWmB9zivPryEsKeXCHkPVJkDMsTvFvLPr0kR6Gt4RsjQ4iRafKFcf8LIHOWCUnd5tmIS1nk1QClmDe7jc5qZDsfv9G8KiIWcha22XiJCAkEHl//0aVGCqGx1CUsh7nDUN8rx+QGMmzAMj78ycu/9Aaw2OUn4X8nqA+2SNGiK5itBLRLkwqLsl8L4TCym+P3e8Jei5VOq3KriZACiggzzIew2b4IZFQgjRlYK9oUQgs4XdIjFOYIyBJKQm3lEIKW5JinByc7wlac1woiXP4IYZiJk+LAL7gh6FPJYowoon79D2BNYqUUhjULgRFPAHZlIZadMZhKTSJskzylf09wYsTyEJhEE6zME4Tn8sr5FHMo/ho9Lb2BtKntEw7V0rG2/AafiKz5DgxDXPPzWBcyWUDJAuX3hnLCCcKiIORaZbtBS+KFL95AAzQdlfB85JqJGXwbBrl1pzoQqD8M8FuK6pvxMa4C7+mR5gcLK4IzvHemQDs3RD/8DIMVCFxerEgFZ81AIfmlSmwhaGLsE3Nw7mPJ6T+1j9j62dlSsTYBPDDjZCS0rMTaZmK/IzUx7rc5qnZUGyX84SRi5fqlF9A/XI8ZDA022p9QRhnWF4IWByeSwgrn803TTNBa4KTVOC3Pip5KSEHL4CM3J4x/uF1FOVSolR8besJWt3w9ZfnIC9EjChL1AdfL9dDMBp1b9k6rBNsQEwpS6vR1e8UOaN0b77pWLbVWGWCRhGltFwdlbwPpU4ZJfuhiaDWntj1BUspCoGAgQPKRFwy0BLi8cHYBGvaeQZXS4CAAENWefN7BZQStDb4WXmb8qat6REIfAwM6cdGCOBE5lV6ctGq5wQpQz6CEri6jtclQTw3drG5ZsdR85BxHKJSxY8ZSE5paF6l53XCXWeTpTRCJw2uoXJG9uZVggzg3HF5zmIYBC7/GUYl2MF8Y7b7WFN3THSOI5bkxSeITdtIYDkHIeMZgpsIEupzfJHdWqX6PEiFHyvwVfkVAb+1SrXGZEPiUBYSiS/iC3Lzyl6zh4v1Nr+2xetRuOVnJV5tB04nRdgX8Spw7rmqwjqBlREt4Sj+yJDvzU04o7wkwPGW83IU/umicZUusAZwOmUI4v8dxpuGeCYoTycRYYgnHxZSs8V/9xDU2nDZJ34YAwi7RjT5dQ/Bg92dwXUAXlO82Xg1nnnb6pVluR4/Gk/2qxTsBUl2WGRs1as3FljgXSKyYGDX7311tKZHWc4jW7SgJ0yTJSnPtPvfPGvNQEQzXh2krTlNN5NNlpvt9GN8recit3tIgkGz/dyP9t1mN+Luk2XdR2H1mtPOsjOe7ZYdwGw564w7s12nOx22jZeLC1ptZzjpd7v98fgRAJ/9fv9x3B+Mhs7nV6b/AfTkb5H+H1TmAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 650,
            dps: 291.04,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 650,
            actualDps: 291.04,
            magnification: "100%",
            count: "8",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 541600,
            actualAp: 10220,
            actualDps: 34066.68,
            magnification: "400%",
            count: "3",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "53.3-66.7s",
            delayFrames: "1,600-2,000f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 300000,
            actualAp: 16800,
            actualDps: 4990.08,
            magnification: "600%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 5256,
            actualDps: 6570.0,
            magnification: "800%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 187500,
            actualAp: 11250,
            actualDps: 16071.42,
            magnification: "250%",
            count: "0",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 11842.11,
            magnification: "150%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "136.7s",
            spawnTimeFrames: "4,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "170.0s",
            spawnTimeFrames: "5,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "3",
            spawnTime: "203.3s",
            spawnTimeFrames: "6,100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "0",
            spawnTime: "236.7s",
            spawnTimeFrames: "7,100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1234Data;

