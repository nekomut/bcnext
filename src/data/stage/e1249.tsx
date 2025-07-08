// Stage 1249 Data
import type { StageData } from '../../app/stage/types';

export const e1249Data: StageData = {
  eventId: 1249,
  eventName: "ネコウエハース降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 249,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "バニラ味 1枚目",
      baseHp: 1000,
      width: 4000,
      enemyLimit: 15,
      requiredCost: 50,
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
          probability: "100",
          amount: "25000",
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
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "10",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
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
      stageName: "バニラ味 2枚目",
      baseHp: 15000,
      width: 5500,
      enemyLimit: 15,
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
            actualHp: 15000,
            actualAp: 500,
            actualDps: 937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "6",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "9.3-18.7s",
            delayFrames: "280-560f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "6",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "8.7-17.3s",
            delayFrames: "260-520f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "6",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "6",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "7.3-14.7s",
            delayFrames: "220-440f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "バニラ味 3枚目",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 20,
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
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 6000,
            actualDps: 3600.0,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "7",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "7",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "7.3-14.7s",
            delayFrames: "220-440f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "7",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "7",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "7",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "バニラ味 4枚目",
      baseHp: 300000,
      width: 4000,
      enemyLimit: 30,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "500000",
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
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 16000,
            actualDps: 2566.84,
            magnification: "100%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "4.7-9.3s",
            delayFrames: "140-280f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "バニラ味 ラスト",
      baseHp: 600000,
      width: 5000,
      enemyLimit: 50,
      requiredCost: 300,
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
          probability: "100",
          amount: "800000",
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
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
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
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 680000,
            actualAp: 14400,
            actualDps: 25411.76,
            magnification: "200%",
            count: "1",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "12",
            spawnTime: "28.0s",
            spawnTimeFrames: "840f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "12",
            spawnTime: "32.0s",
            spawnTimeFrames: "960f",
            delay: "4.7-9.3s",
            delayFrames: "140-280f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "12",
            spawnTime: "36.0s",
            spawnTimeFrames: "1,080f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "12",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "12",
            spawnTime: "44.0s",
            spawnTimeFrames: "1,320f",
            delay: "2.7-5.3s",
            delayFrames: "80-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "48.0s",
            spawnTimeFrames: "1,440f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-5.3s",
            delayFrames: "80-160f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.3-10.7s",
            delayFrames: "160-320f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        }]
    }
  ]
} as const;

export default e1249Data;

