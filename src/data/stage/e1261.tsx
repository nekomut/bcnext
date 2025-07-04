// Stage 1261 Data
import type { StageData } from '../../app/stage/types';

export const e1261Data: StageData = {
  eventId: 1261,
  eventName: "熱血！障害物競走",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 261,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "目指すは一等賞",
      baseHp: 25000,
      width: 5600,
      enemyLimit: 100,
      requiredCost: 50,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "3",
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
            count: "5",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
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
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.2-0.2s",
            delayFrames: "6-6f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.3-0.3s",
            delayFrames: "10-10f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "4-4f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.2-0.2s",
            delayFrames: "6-6f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.3-0.3s",
            delayFrames: "10-10f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 25,
            actualAp: 40,
            actualDps: 27.91,
            magnification: "50%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "4-4f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 120,
            actualDps: 41.38,
            magnification: "20%",
            count: "3",
            spawnTime: "15.3s",
            spawnTimeFrames: "460f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "駆け抜けま賞",
      baseHp: 25000,
      width: 4000,
      enemyLimit: 100,
      requiredCost: 75,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "315",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAgIEBAQFBAQGBgUJCAcPDAgODQwVEhAUExMcFxQbGRciHRogHxosIwcoIxc0Kh44Lw0wLy08NxRVOCNSPhIMT31VPSg/REdBR01iSjZPU1hXVU1zXQh2UzhZYWplaGxxZ16HZjpscniPewx6d3SYdUyBg4a0gE+fiHexlweMk5qrnETPjlipm47ekVzGrR+Sq8Tdmm2rqafLrILevxS7trPAwMDlu57Hys3a087i4uLx6+b19PP+/v6wPrTxAAAAQHRSTlMA/wkXIj0wWUmvbP+T23tmwvGl/o3pz////eL//cnv//7o/////v7//////v7//////////////////v//////rIxqjQAABElJREFUWIWdl2tzskwMhhXxBOIJtSAoyCIsh4LWpSAr8P//1RvQzrTv86G7zTjjOEOuTXJnQ+z1fjHh9bXYLITfnv3XBuPNej2fgOfi/HmWeN2FxSG6Xq/RcT0UZtFnNOP130Sf14zSNDpv18fjcj3iBIyOn1ndNE2lv+nnoyRwl2ARRRT8G/r2htBqzOve680j9GjqklKI4M3aiX8A+HWTGufzWX17M/g16I3P17p2URSdcUqKaM1dA3F7LevUiCK1aJr6czfgBYCM75Ri6+zQvwF64jJ6f9A8zR8gxfUPgJGina93SstHTd+5+xBSmLmucozeW7tGO94+7PUm+/gwGi+PZ9DhyN3HcBOX+DQejMdDaTaTRoI45JVxbseb0dR4pi6MdwpnDCNIYLJEaNkeLCyOwZYPABX0pBlC6rJVb3IMNE4AVHA9PgaqqgBA3CWWygcYLHVdWvqGrCpDUZxCJMZ2yBWAquvTlaXKmrbdnkxNk+XVhAcwUkx7hfwgAbtV9T3xNZkL0JN02790ltzqps6SRJtzAQZT6+l/CRy4S5mVBFOuThKmwfN8FHSXEaFkyXUdxe3rfMPrJrNtQCfxhDB8AZK0PR+7pqHJylRiD2JiXC635HK5w/nExHlJTBdjc8o8m4foBuanMM2o+VGWhY11WXVt5rEyjCswWpBHg928KGJb7/eBoDAD0val9KC0qc344+PDtuV+v6+aJnsE4F/npGiqF6DfAnSXFTA60Va+VsEfAJvNXZhI+7x8tGWoHjYGgOvKbQ3sPRtA0lXTjYunYT2OY2xCEWTVm7IFMNU9XGCcd4Dc7FrAduGzZxwKM1tfnrDrPgnE0U0TusA0l6xDZQZHDWd7Hb+yIClWFcW2mbeMubsXYZSvdAd35tmqOpPwiXksSu5OnKxPnmlZmBDiaVbsrqbeifkmSK6yPhGSmgYmkEHqWCS3QUMOgG6FuWOohuN15nihozsm85oztzHJiaVpfvY0x0vTEN1PrCrMbVLQPHQMlCQBCuD9oCVZhmjJuCgJa8j80TzSFoDk1tQgyfyqPrCNJOGQF2X9AgSy5gdBkNyysGkYdQBACpvZgxgGQkizEPLBwpDmjDoIB4JCiKDMwzTWZVnXoSZFXviWwgoILXRv1+RLqMIYkE3PbdfmjAEgDDqAb6EEXCqq9zuzsVfBz/T3FIYzoQUgK6Tg0aRP/74cu+ROawYVpP2oS4GU3TyzX4C+g73bjQWwIfOnjN1fhVr/Atixk8HyzwCg8MwLUFXfAS4MWSZAOf8C5H6qfgM0TIBF2ZxGXwDLkrkBk7x5HMQnoPDzHync7/R3gHhqmnJ9ICn08s8aOPR2SRh2/g3ol5qeZpD/qaCFt4QFIB6KqvBSy4LX6g+AUbABeoP54WQXJKyrjFbfa1BlLDXoEMNDAUWsYD/5UcSKRYXWhtOV5+EYw0z/6gO40iqGV6Tyz7b5H9j6xCH/36b3AAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 1500,
            ap: 50,
            dps: 2.0,
            speed: 0,
            range: 1000,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 10,
            tba: 375
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 80.0,
            magnification: "4000%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
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
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 600,
            actualDps: 206.9,
            magnification: "100%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "85%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "85%",
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
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "90%",
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
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "10",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "95%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "95%",
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
            count: "5",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
        }]
    },
    {
      stageId: 2,
      stageName: "乗り越えま賞",
      baseHp: 25000,
      width: 5000,
      enemyLimit: 100,
      requiredCost: 100,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "56",
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
            count: "7",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 214000,
            actualAp: 1420,
            actualDps: 635.82,
            magnification: "100%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.2-0.8s",
            delayFrames: "6-24f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.3-1.3s",
            delayFrames: "10-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.5s",
            delayFrames: "4-16f",
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
            count: "7",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 1200,
            actualDps: 413.8,
            magnification: "200%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "0.2-0.4s",
            delayFrames: "6-12f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "5",
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "0.1-0.3s",
            delayFrames: "4-8f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.2-0.4s",
            delayFrames: "6-12f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.3-0.7s",
            delayFrames: "10-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 160,
            actualDps: 111.62,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.3s",
            delayFrames: "4-8f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "迷ったで賞",
      baseHp: 25000,
      width: 3500,
      enemyLimit: 100,
      requiredCost: 125,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "57",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "315",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAgIEBAQFBAQGBgUJCAcPDAgODQwVEhAUExMcFxQbGRciHRogHxosIwcoIxc0Kh44Lw0wLy08NxRVOCNSPhIMT31VPSg/REdBR01iSjZPU1hXVU1zXQh2UzhZYWplaGxxZ16HZjpscniPewx6d3SYdUyBg4a0gE+fiHexlweMk5qrnETPjlipm47ekVzGrR+Sq8Tdmm2rqafLrILevxS7trPAwMDlu57Hys3a087i4uLx6+b19PP+/v6wPrTxAAAAQHRSTlMA/wkXIj0wWUmvbP+T23tmwvGl/o3pz////eL//cnv//7o/////v7//////v7//////////////////v//////rIxqjQAABElJREFUWIWdl2tzskwMhhXxBOIJtSAoyCIsh4LWpSAr8P//1RvQzrTv86G7zTjjOEOuTXJnQ+z1fjHh9bXYLITfnv3XBuPNej2fgOfi/HmWeN2FxSG6Xq/RcT0UZtFnNOP130Sf14zSNDpv18fjcj3iBIyOn1ndNE2lv+nnoyRwl2ARRRT8G/r2htBqzOve680j9GjqklKI4M3aiX8A+HWTGufzWX17M/g16I3P17p2URSdcUqKaM1dA3F7LevUiCK1aJr6czfgBYCM75Ri6+zQvwF64jJ6f9A8zR8gxfUPgJGina93SstHTd+5+xBSmLmucozeW7tGO94+7PUm+/gwGi+PZ9DhyN3HcBOX+DQejMdDaTaTRoI45JVxbseb0dR4pi6MdwpnDCNIYLJEaNkeLCyOwZYPABX0pBlC6rJVb3IMNE4AVHA9PgaqqgBA3CWWygcYLHVdWvqGrCpDUZxCJMZ2yBWAquvTlaXKmrbdnkxNk+XVhAcwUkx7hfwgAbtV9T3xNZkL0JN02790ltzqps6SRJtzAQZT6+l/CRy4S5mVBFOuThKmwfN8FHSXEaFkyXUdxe3rfMPrJrNtQCfxhDB8AZK0PR+7pqHJylRiD2JiXC635HK5w/nExHlJTBdjc8o8m4foBuanMM2o+VGWhY11WXVt5rEyjCswWpBHg928KGJb7/eBoDAD0val9KC0qc344+PDtuV+v6+aJnsE4F/npGiqF6DfAnSXFTA60Va+VsEfAJvNXZhI+7x8tGWoHjYGgOvKbQ3sPRtA0lXTjYunYT2OY2xCEWTVm7IFMNU9XGCcd4Dc7FrAduGzZxwKM1tfnrDrPgnE0U0TusA0l6xDZQZHDWd7Hb+yIClWFcW2mbeMubsXYZSvdAd35tmqOpPwiXksSu5OnKxPnmlZmBDiaVbsrqbeifkmSK6yPhGSmgYmkEHqWCS3QUMOgG6FuWOohuN15nihozsm85oztzHJiaVpfvY0x0vTEN1PrCrMbVLQPHQMlCQBCuD9oCVZhmjJuCgJa8j80TzSFoDk1tQgyfyqPrCNJOGQF2X9AgSy5gdBkNyysGkYdQBACpvZgxgGQkizEPLBwpDmjDoIB4JCiKDMwzTWZVnXoSZFXviWwgoILXRv1+RLqMIYkE3PbdfmjAEgDDqAb6EEXCqq9zuzsVfBz/T3FIYzoQUgK6Tg0aRP/74cu+ROawYVpP2oS4GU3TyzX4C+g73bjQWwIfOnjN1fhVr/Atixk8HyzwCg8MwLUFXfAS4MWSZAOf8C5H6qfgM0TIBF2ZxGXwDLkrkBk7x5HMQnoPDzHync7/R3gHhqmnJ9ICn08s8aOPR2SRh2/g3ol5qeZpD/qaCFt4QFIB6KqvBSy4LX6g+AUbABeoP54WQXJKyrjFbfa1BlLDXoEMNDAUWsYD/5UcSKRYXWhtOV5+EYw0z/6gO40iqGV6Tyz7b5H9j6xCH/36b3AAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 1500,
            ap: 50,
            dps: 2.0,
            speed: 0,
            range: 1000,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 10,
            tba: 375
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 10000,
            actualDps: 400.0,
            magnification: "20000%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
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
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 428000,
            actualAp: 2840,
            actualDps: 1271.64,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "85%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 1200,
            actualDps: 413.8,
            magnification: "200%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "85%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "117",
          enemyName: "カベわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMDAwMDAwMDAwMFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkKCgoREREREREYGBgbGxsdHR0lJSUnJycpKSktLS0vLy80NDRERERERERFRUVSUlJUVFRVVVVZWVlbW1tgYGBqampzc3N9fX2GhoaJiYmQkJCfn5+pqam1tbW6urrBwcHIyMjQ0NDZ2dni4uLp6enw8PD29vb7+/v///9EYrlRAAAAQHRSTlMABg0YJMLa7oOOLDp8tNFqpERNWffhYJc6xKOCvOe2mNLA/PH/3f/v+P/f//7////z///+////////////////F9WOBQAAA2VJREFUWIWtlwtzqjoQxwtUa1Hr+9nqRQQUCWDCIwGS+P2/1Q2g7Tlz71GQ81dmFob9ze5ms0NeXu5K6co/9mgs33n1/ySpvf7y2/7U+q/1/OXx9rAfSKX/aH2AO7We/2R3JnCtFP7drZfEWreOvzTRUMbDXRH269pNOTFHdQDdLaSXS+kkzU3CL8mpMkBRVbWzDwkh0aEn7O4QYEJCc6DmUh7Frozfv3a7jW7l0rWd0Mb4sb96j9wX5t6PhMJcUalfbO/rLmC5Ns8xjDi/lBJGafLy4jy4C5B6+4gyFPGbe5LeUCxlxaNHgEN6+QXAkBuz0j90SX3AhSeeHeQEHlpe+kQElKUQ0dyKIKFFEWoAOI8BojQrblgMIK0ZAWf+1Ei+qzG1krop8ND2s+sa8tjNc3m8jFdArnzpyvgvLBF9nWasegQloLgygjG0bdtxAcoyDCsBGIEwzDgTGEbCABoggLoBLAiBWxHgAS/JcJ41ozQBtudYQepbAUbVUmApxjQoFi7PhCAII8oDK6qYAs+gH2a+K2rISzGRDoM28qxVJQCNE8pCC4blTi53c2D7aeJXXIU89AzZRjlXhAzdMLykZiOJWlr5ZBPC0Ahwxis30m0IQJDdWtlJntjO1HPp76jaAK8pwI5wodi1nkiBx5ZhO6UsvdiZNQEkiPFNgRXmM7oeQMy0bxEb8erz4FaD0Pc8zy/+AJCaMzGvPUH+TZDw+qsgGuhH/Ill/K/uASS5GUCeT+RGALU1VBoBJpuV2gjweTTHciPA+fypNAH8g+LdqBEgSEGv0wjA0HbRqAaMmP0GgPkhpXBzbNBIO0QTy3oeID6vofimarCZ5IEG7CaAF3m0mDVIIc9CWTQoYkFoNFD+DmCP0wSi9M968IkzX51OR8NyHNd1ncPpqiNwHRu4LjgeTubwHkCcdpbjLzd0rBDHznrUXea/uYYw1H2M0aa37D48/MmfZ4qMmGegdz2qqjvMA91JeaRVOXdJ81MKdY8mp7F0A8TksBCdjraVzp5LDR2GZhBpS7mUuoVgrQ5MfF48OrKJBBR11NJXnf7eWb1ftfjQ24tBb+Xs37uvinQ//m5n2JpNZ+322/Rt9nbVdPrWbrdn0+lHfzi4H4SkDt6H/Var9ZGrfVN+Ix62+sPO5DfAvzaVq9QtYqTsAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 460,
            dps: 205.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 460,
            actualDps: 205.97,
            magnification: "100%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "85%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "85%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 1200,
            actualDps: 413.8,
            magnification: "200%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 428000,
            actualAp: 2840,
            actualDps: 1271.64,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "90%",
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
            spawnTime: "3.7s",
            spawnTimeFrames: "110f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "95%",
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
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "95%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 8300,
            actualAp: 1200,
            actualDps: 818.18,
            magnification: "100%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.5-1.1s",
            delayFrames: "16-34f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "よくがんばったで賞",
      baseHp: 25000,
      width: 6200,
      enemyLimit: 50,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "106",
          enemyName: "花火職人（高空）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMEBAQFBQUNDQ0VFRUdHR0dHR0jIyMoKCgpKSkuLi42NjY/Pz9KSkpRUVFYWFhfX19mZmZvb29zc3N5eXmAgICIiIiMjIyUlJSmpqaysrLFxcXPz8/V1dXc3Nzi4uLq6ur4+Pj///////925DRDAAAAQHRSTlMABQwfJTU+Q0lebHeGj5mrxdrg5ra9ztT/GKVUfvrw//+U///q/////////////////////////////////wD/rZj7kAAAAyBJREFUWIXt1tt6qjoUBlC0aq1tLSjobCmEFTYmgIAQIAh1+/5vtbCesF+LsLztf+FhCoMJIRLh/xsj/AK/wC/wFRAq6agvGiDTKmNiBPrLa/VX4TrwBqbPjgnt1UJqCYj+ef8otBnTWgKyF7FzBw5jettT8FglS8amLYE/yyoQsGjSFnDZRaK2F/GP4zvU+Aw2TMvxWgJ3MgANzWS9pnlOeWojbdQKEC1u84J5ReGnRWrnaxLgVgAsc0biyLA9G9zQ8rKFT1sBzxZZGoAwOWQBSGkFdN6x60fnUWTLebfdKKi0Moar0hDbjcIlEPwDMCQVwL8VKOeFr7QE7heXc+k2wP0HYGBVACdkvnwTwG4DolV0YwesVQdDWR6/fgPs61eBOwV2ebv/Cuj7eucKMNBxnH+kLkhfAUg+67NuLdCZ4WK7SwrGF4Ae6k+1gAp8u48HzndAWR/VAaJ92H+7wehbYIP1OgCSI7C14QII6KleC6xPAP0BoPXAqYMNuhiGyDXzQ12pA2RyBBIw8DkGAiCH+rAOGIKz2R+ImK6bcpzyxM/4IuAkJfu6WH8jjTQr3R0Hg7+mfu6TrHDiIsZZHONd3dL7V27lvoKQiZA4B88B0wLDNoC45RNC29VB6V+fTEAtOu89ERb6rrOPF4bBBAjCd01m44xbMdfF8k+1skZhK3G6iONBE+DJS6dhEWC6uhhHRUtTNGwC9MyN8fhfskk9u7I/sXh5ZbtNAGGWRkpfRG54nA1hsMTxh0+S8zqpFlDpxgFA9mmVFDgQx8jYhEozQHiLt1ueOIAsa1HGQsgA0JIteWwI9Cg3LJ9nhnqsdMY0K+eR3GsGdNGH3n2YJKeW+zO2TWK+TbSHRoAgJt69MCD5YXWq4iy3Z/LEzAoyagQ8enwsCNMP/HnjvDtFopdn0x2jtNB714HOu57F5aQbx9549x1lmbR/IAz1fPlWC7wO1Mcn3eFUk+YSIsnnswDcDYbJvMzLLEym6v3dT8BoutscLRw4xDi8R/z4yeG7V/39hw66fXX0/Pwiy3NJkiZwDkV6WZFkWSfS6GHwWu3gLykgoJ8lA03dAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 0.05,
            speed: 5,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 569,
            foreswing: 190,
            backswing: -189,
            tba: 190
          },
          stageStats: {
            actualHp: 2,
            actualAp: 2,
            actualDps: 0.1,
            magnification: "200%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
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
            count: "7",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "117",
          enemyName: "カベわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMDAwMDAwMDAwMFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkKCgoREREREREYGBgbGxsdHR0lJSUnJycpKSktLS0vLy80NDRERERERERFRUVSUlJUVFRVVVVZWVlbW1tgYGBqampzc3N9fX2GhoaJiYmQkJCfn5+pqam1tbW6urrBwcHIyMjQ0NDZ2dni4uLp6enw8PD29vb7+/v///9EYrlRAAAAQHRSTlMABg0YJMLa7oOOLDp8tNFqpERNWffhYJc6xKOCvOe2mNLA/PH/3f/v+P/f//7////z///+////////////////F9WOBQAAA2VJREFUWIWtlwtzqjoQxwtUa1Hr+9nqRQQUCWDCIwGS+P2/1Q2g7Tlz71GQ81dmFob9ze5ms0NeXu5K6co/9mgs33n1/ySpvf7y2/7U+q/1/OXx9rAfSKX/aH2AO7We/2R3JnCtFP7drZfEWreOvzTRUMbDXRH269pNOTFHdQDdLaSXS+kkzU3CL8mpMkBRVbWzDwkh0aEn7O4QYEJCc6DmUh7Frozfv3a7jW7l0rWd0Mb4sb96j9wX5t6PhMJcUalfbO/rLmC5Ns8xjDi/lBJGafLy4jy4C5B6+4gyFPGbe5LeUCxlxaNHgEN6+QXAkBuz0j90SX3AhSeeHeQEHlpe+kQElKUQ0dyKIKFFEWoAOI8BojQrblgMIK0ZAWf+1Ei+qzG1krop8ND2s+sa8tjNc3m8jFdArnzpyvgvLBF9nWasegQloLgygjG0bdtxAcoyDCsBGIEwzDgTGEbCABoggLoBLAiBWxHgAS/JcJ41ozQBtudYQepbAUbVUmApxjQoFi7PhCAII8oDK6qYAs+gH2a+K2rISzGRDoM28qxVJQCNE8pCC4blTi53c2D7aeJXXIU89AzZRjlXhAzdMLykZiOJWlr5ZBPC0Ahwxis30m0IQJDdWtlJntjO1HPp76jaAK8pwI5wodi1nkiBx5ZhO6UsvdiZNQEkiPFNgRXmM7oeQMy0bxEb8erz4FaD0Pc8zy/+AJCaMzGvPUH+TZDw+qsgGuhH/Ill/K/uASS5GUCeT+RGALU1VBoBJpuV2gjweTTHciPA+fypNAH8g+LdqBEgSEGv0wjA0HbRqAaMmP0GgPkhpXBzbNBIO0QTy3oeID6vofimarCZ5IEG7CaAF3m0mDVIIc9CWTQoYkFoNFD+DmCP0wSi9M968IkzX51OR8NyHNd1ncPpqiNwHRu4LjgeTubwHkCcdpbjLzd0rBDHznrUXea/uYYw1H2M0aa37D48/MmfZ4qMmGegdz2qqjvMA91JeaRVOXdJ81MKdY8mp7F0A8TksBCdjraVzp5LDR2GZhBpS7mUuoVgrQ5MfF48OrKJBBR11NJXnf7eWb1ftfjQ24tBb+Xs37uvinQ//m5n2JpNZ+322/Rt9nbVdPrWbrdn0+lHfzi4H4SkDt6H/Var9ZGrfVN+Ix62+sPO5DfAvzaVq9QtYqTsAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 460,
            dps: 205.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 460,
            actualDps: 205.97,
            magnification: "100%",
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 1800,
            actualDps: 620.7,
            magnification: "300%",
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 535000,
            actualAp: 3550,
            actualDps: 1589.55,
            magnification: "250%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 8300,
            actualAp: 1200,
            actualDps: 818.18,
            magnification: "100%",
            count: "10",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.5-1.1s",
            delayFrames: "16-34f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.2-0.2s",
            delayFrames: "6-6f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "4-4f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "300",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASEhIcHBweHh4oKCg0NDQ3Nzc7Ozs/Pz9KSkpUVFRcXFxdXV1nZ2dtbW14eHh9fX1+fn6EhISGhoaNjY2UlJScnJyfn5+jo6OlpaWurq62tra7u7vDw8PFxcXJycnPz8/Q0NDV1dXa2tra2trg4ODk5OTm5ubr6+vv7+/v7+/09PT5+fn9/f3///9RQjxzAAAAQHRSTlMAAxAfKTdCTlphga7K2eHr9PkOEwkhNSQTSDcSJk43YXRNM4k5aJS9gs+dt6jHu+XO+d7S3ujW7d3z4/j7/f7/F+LHvQAAAZRJREFUWIXtlsmagjAQhIkr44ajqLiDoLgrooMISb//W00nMCc9hOt8+U91oAu6ug5o2htk5nneyuLSWqGa/ilv9v7wJ/r75+v14xCUTvh6PdeoiFBbOQPTTYClWxPVNmWMHq1MQWzLGZD5A4CdcWx6ZgAQ4pdbR8rgNpEz0EYnxuC+0LTFHVDFuMMsBEYPA0mD3iYFPkbWCVAKdG8SJwJIXCJpQJYRvm9vWkcGQQBwnYkIHnNZA21yxU8/W7gB9XcUIodHwE4j2Xk8JOUh4AaxjSdJt5MQIN30pA2IHQOL7SPF4PEk7GxjBNFSegPc4YYh+DfA4PEk8PAxgqvsETmDA+4cJDx4fpI0YHiLfgEDXkYsEwaf1QqJ7QIb5FOM8eqIWoF8DTOyqcQ181oVqGGGmMqqw2uVexVATOXVwVpxr0LzOLW7XC6uqE7PRenL1zDDHI7H44EIngxQDovcQKFQKBQKhUKh+KeQUrlSrdXruv4l0PV6vVatlEuy/8vlRrPV7hhGt/st6HYNo9NuNRuVDw//AntRRo0X/1BdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 30,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.2-0.2s",
            delayFrames: "6-6f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "301",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQTExMWFhYiIiIjIyMpKSkpKSk2NjY3Nzc4ODg/Pz9GRkZQUFBXV1dhYWFra2t1dXV4eHh7e3uAgICJiYmMjIykpKSlpaWwsLCwsLCzs7O3t7e/v7/GxsbHx8fNzc3Ozs7X19fY2Njh4eHi4uLq6urx8fH29vb8/Pz////l+TmlAAAAQHRSTlMABQwkMT9OWGVyeoGhr7rJ0t3p7/b9GQ4YDSIzO1BAIxEWMmR+TmON056vg4rD4Py1nc6m2fjk69/z6ff5/f//vr8fDAAAAipJREFUWIXtV9l2okAQ7cbEBZMYl7C4oCOgYZuJCYkg0Pz/X01VNZqZPAAfwH3wcA+nbtetunCQsf+x+4XYcclMYmZ1i+7tTFYH/XD6AIRbYtxFdnJlzT78IFYrYB4zIUqRuNSCGeZCiOJEcvxwASK+7FoBbn+BQJkFCp35DteleN+TWpADKaJVrQBbRQWUFG9bcnApEZcD9rN9K0Au94x6Ac3Lbofq4AAF8hCL9jGSs63UC3D7fDsUz4SBSDkYASlb9fWMWeQ7C0xwkEBxAQooByNAB36DA8aW/nUIZgBusj8FejCrEaROgwPGFCdFD/EeS0rx+ZqWAjxwC0YgRLzhTQJ8E+MioWs3wa05uNfE1WkERbRsqgcPuMgyDwxy4K2RZsEyxBRkR71ZQD9mNAQLHMDWNKDEZAwbHVAYcV+xE8NvZFE2RUKsMYYSFMYyhelR7ogSA0ONS0QYFMb8kxxwZpAHZERboAojDh1zJy2V7WIoIcNYXp8caQmp32KJiKWfy4oz5c7wKpo6LZaI0GUYsWX+balVDCWqMN5ariy1imHlgd4qt5YNtAS0TQwrD/hm/G5Zsc+tY3j1EP0GeFXLfO0j9VvFUMKwNoDV9UR9jXTd2kGHDh06dOjQoUOHn+CK1ru77w+Gw9FIVccAVR2NhsNB//6upymNn3q98eNkOpvNF4vFyz8AOp/NppNHVWsQ0Abjh6fJ8xRFUIUwx+Lp8+TpYdz/8b/vL0H+gIpK/LCdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 40,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "299",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzM/Pz9VVVVqampzc3N/f3+CgoKIiIiUlJSXl5ecnJydnZ2ioqKmpqanp6epqamvr6+vr6+xsbG6urq+vr6+vr6/v7/AwMDBwcHIyMjIyMjKysrPz8/Q0NDR0dHS0tLT09PY2NjZ2dnb29ve3t7f39/j4+Pj4+Pk5OTm5ubo6Ojp6env7+/w8PDw8PDz8/P09PT4+Pj4+Pj9/f0X8qgjAAAAQHRSTlMAAQQJJS9zepmrtrsFBAkVGworNi4VOWlGfyOGMFg7bXydOFxLeZFOUeWSiKvCuaPHy7zT8cbZ5OHs9/bt9/z/9KoP8wAAAK1JREFUWIXt17kSgkAMgOEsXgiyooKgiKLgjffBIbu8/1s544wlFhnLfEWq5O8DUIlPN2Ow1wvei6LqrR+MldgroXjYk/SGCoAvrt1TWUxDEeMCVpK6z22+3MkZLsCPYp55z8MlG+ICLJD3ZBDn+bmLC4BblEc+k+XKQAbMmwyYlbx85D10HK8P3BmZ2AAw9h2EEEIIIYQQQv6MKbUPBfl11ZtqW9N1ra22GtVbbxIwDl1kEsjtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 50,
            ap: 80,
            dps: 55.81,
            speed: 60,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 10,
            freq: 43,
            foreswing: 4,
            backswing: 14,
            tba: 20
          },
          stageStats: {
            actualHp: 200,
            actualAp: 320,
            actualDps: 223.24,
            magnification: "400%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "4-4f",
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
            count: "7",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
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
          enemyId: "117",
          enemyName: "カベわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMDAwMDAwMDAwMFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkKCgoREREREREYGBgbGxsdHR0lJSUnJycpKSktLS0vLy80NDRERERERERFRUVSUlJUVFRVVVVZWVlbW1tgYGBqampzc3N9fX2GhoaJiYmQkJCfn5+pqam1tbW6urrBwcHIyMjQ0NDZ2dni4uLp6enw8PD29vb7+/v///9EYrlRAAAAQHRSTlMABg0YJMLa7oOOLDp8tNFqpERNWffhYJc6xKOCvOe2mNLA/PH/3f/v+P/f//7////z///+////////////////F9WOBQAAA2VJREFUWIWtlwtzqjoQxwtUa1Hr+9nqRQQUCWDCIwGS+P2/1Q2g7Tlz71GQ81dmFob9ze5ms0NeXu5K6co/9mgs33n1/ySpvf7y2/7U+q/1/OXx9rAfSKX/aH2AO7We/2R3JnCtFP7drZfEWreOvzTRUMbDXRH269pNOTFHdQDdLaSXS+kkzU3CL8mpMkBRVbWzDwkh0aEn7O4QYEJCc6DmUh7Frozfv3a7jW7l0rWd0Mb4sb96j9wX5t6PhMJcUalfbO/rLmC5Ns8xjDi/lBJGafLy4jy4C5B6+4gyFPGbe5LeUCxlxaNHgEN6+QXAkBuz0j90SX3AhSeeHeQEHlpe+kQElKUQ0dyKIKFFEWoAOI8BojQrblgMIK0ZAWf+1Ei+qzG1krop8ND2s+sa8tjNc3m8jFdArnzpyvgvLBF9nWasegQloLgygjG0bdtxAcoyDCsBGIEwzDgTGEbCABoggLoBLAiBWxHgAS/JcJ41ozQBtudYQepbAUbVUmApxjQoFi7PhCAII8oDK6qYAs+gH2a+K2rISzGRDoM28qxVJQCNE8pCC4blTi53c2D7aeJXXIU89AzZRjlXhAzdMLykZiOJWlr5ZBPC0Ahwxis30m0IQJDdWtlJntjO1HPp76jaAK8pwI5wodi1nkiBx5ZhO6UsvdiZNQEkiPFNgRXmM7oeQMy0bxEb8erz4FaD0Pc8zy/+AJCaMzGvPUH+TZDw+qsgGuhH/Ill/K/uASS5GUCeT+RGALU1VBoBJpuV2gjweTTHciPA+fypNAH8g+LdqBEgSEGv0wjA0HbRqAaMmP0GgPkhpXBzbNBIO0QTy3oeID6vofimarCZ5IEG7CaAF3m0mDVIIc9CWTQoYkFoNFD+DmCP0wSi9M968IkzX51OR8NyHNd1ncPpqiNwHRu4LjgeTubwHkCcdpbjLzd0rBDHznrUXea/uYYw1H2M0aa37D48/MmfZ4qMmGegdz2qqjvMA91JeaRVOXdJ81MKdY8mp7F0A8TksBCdjraVzp5LDR2GZhBpS7mUuoVgrQ5MfF48OrKJBBR11NJXnf7eWb1ftfjQ24tBb+Xs37uvinQ//m5n2JpNZ+322/Rt9nbVdPrWbrdn0+lHfzi4H4SkDt6H/Var9ZGrfVN+Ix62+sPO5DfAvzaVq9QtYqTsAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 460,
            dps: 205.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 460,
            actualDps: 205.97,
            magnification: "100%",
            count: "5",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 1800,
            actualDps: 620.7,
            magnification: "300%",
            count: "5",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 400,
            actualDps: 1.5,
            magnification: "100%",
            count: "20",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1261Data;

