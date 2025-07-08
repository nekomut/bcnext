// Stage 2188 Data
import type { StageData } from '../../app/stage/types';

export const e2188Data: StageData = {
  eventId: 2188,
  eventName: "VS訓練用モールモッド",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 188,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "訓練レベル1",
      baseHp: 50000,
      width: 4000,
      enemyLimit: 8,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
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
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "3",
            spawnTime: "1.0s",
            spawnTimeFrames: "30f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 600,
            actualAp: 20,
            actualDps: 10.17,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "訓練レベル2",
      baseHp: 100000,
      width: 5000,
      enemyLimit: 8,
      requiredCost: 125,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "訓練レベル3",
      baseHp: 150000,
      width: 4000,
      enemyLimit: 12,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
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
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
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
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "訓練レベル4",
      baseHp: 200000,
      width: 6000,
      enemyLimit: 8,
      requiredCost: 175,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "訓練レベル5",
      baseHp: 250000,
      width: 4500,
      enemyLimit: 12,
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
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
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
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
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
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
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
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1016.95,
            magnification: "100%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "620",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQABAQACAQADAgADAgAEAgAFAgAHAgAKAwIKAwELAwEQBAITBQEaBwAxDQAzDQE1DwE7EQBHEgFPEgBPFwBXGwBkFQJfGgCBEAFiIAJqHQB0HAKaEQBcLx15JwGDIwKxEwGTJgOqKACbMwF9PiSeNQG4LAGuOQK/OQDJQgCdVDi4VBXZRwDoTQDTWhOoaTz0UgL/VwG5ggqpf2v8aRCymIbXoAHHuKbZyLfVXqdhAAAAQHRSTlMACing9OoWc64hQEwyXmrDVonVnXm6qMqZ6//bs//k/8/1////6P////////H////+////////////////////iYhFYQAAA+ZJREFUWIXtVe1y6jYQBdJLAth8GXAwyAYZr2UFSwILrMQJ9/3fqiuTBsik02n/dYaTAQHePXv2SNo0Gnfccccdd9xxxx3/I3S6jaYfLpqt2fOw+R/yvTV/9lgun6e55C2n9e+y+8MWyfOM5Rkiz9UT8Fnnn9OG7nltzhgLIc9yBpBljOGHTOrJZ1T7b5kcOMc0m/OcMQqMMwK40AyF5MYfncNaYe/n/OZq3a7lL6aQ0ZQwnsZUqChiiCzTEDyeA5fbnw2ZqEW9TnNGSZoSSNOIkZITLg4HQZni4NXqJ2b5o4BErPF553nBwOZTmw9BURJRGmMUVUbzpF9XKpybzPMm95SQ2OWEsYJjLqnzKSkML41lKPBjqdSy3fC4mlzS+zM/DFfLbmOpmJU2YaWK0jiI05jxiFFRcJuOL2C4yGLVWmUwvuxEu+MMn6FIuhICtW22FqWBOCUoIOZxnIFQXCKBkZxrZKn24kHllE1v+18Vy0kBg7CYzpWxAggKAEgjJZgpbWVm0+1fVTJgJIfrrWz7slgkmiZrCZCXPK4diFFIpGWAJhQlKKuirGHEIGFydXU9erlWfF+CBKZASYoCojQFXKHkgpuCy8JWV/vj8XjQxoTzjKv+1TbMmIRDCYwRdKyM0ijALqi1EauLosL6pVHH99+I00aY7SATJry+oU7Pr7Tn9j1ZiJoAky2JMKLQohLYgAzY7nX3stkEYBLHz8zBvbWxUo49TFgS0gA9tCSRNAoEmAO2QQR7/Xg9voCQCQ6KgapW1/ntrdnaizArNYeAonyCBFQbTXJWVpQTsuevHx98gyfax1Kd0ByGVwQtZRLbkyuxFs0YCSi2AOg7aK4r/vK2ieJ4L6KXNzzSvo0UNxK6ytRfmwtjNOBloOgoeojnDxWYPT+e3t92ux0auZHas6G+2V+dhWFxJmj0MAnsGMFhgnaVhmb4fuD65e10+n06ve9E6de3fiir2YXA1Z8Ejf5aEmbnGA4SZrQOKEcd+CqkQKjSJO3z5idn2z7T9NkDa0d/YYdhDooIoxV2Yxvh9YWqqsqIT++aodHuNcGFru1hDznkFAk45ATPHg+Y0niMC5l8nUC0a/YzAXrqzbMMGQqDA5FhdZ7hlAqCwci9RD3izl08KL6Nqc7En+NOKMghA7zhhMwpndyENKZXRbtKOY1v6HT7I2+2nA78wkzdVjvMurcBjpBfc6UtfpyTn9hqGzhbf/8Ht+R/KWh3FlOn2+31esOh67p9t494/EK4tu/jsf0VH7vDIUZ2u85o3jlzNnso1nsaDAbj8fjh4eGXxR8XnL/8qn/Hxw8YNRg8PXmjkev8CezPrAueL1eBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 90000,
            ap: 3000,
            dps: 1525.42,
            speed: 8,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 1525.42,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "621",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgIDAwQDAwQDAwMFAwYFAwYFBQYGBAcGBQYGBgcIBwgJCAgJCAgKCAsOChEODQ4SERQTEBcWFBcXFhgZFxsaGRsdGx4eGyAhICMmJSgnJiknJyosKi4wLTI1Mzc6ODxDQUVKSE1TPHpWVVhdW15xWo1ta29ycpaKe2uBj5uej3CSpauzo27Ju2Ctx8fh0HC92dxf8fFkAAAAQHRSTlMABw4WHiUwPENKUVljemtzz/OGoL/qqtnImI254/+w9v/Qt//f6///9v/Q////////////////////////////8EYuZQAAA+BJREFUWIXtVWtz6jYQBQwOYJ7hZQcLRGQkNpJWunZyk9yW5v//q67t3MTcpjNtv3WGk/EQQHu0Z8/u0mpdccUVV1xxxRVX/I/Q7bc6cZp1euskav+H+GQukoRxlSy5UL2w9++iR1GPcc7LR3AhTmu+X/wDimhUv7bXXKwYF0wLxplUXHKu7PT9VPC3TKEY1/HtFWdgOcNcCG5zCudc2sNdfayXDr+Obx/2Qfk62Ww504XlrvBSaudEJcaAfM9hdwq/JJhCVhV7y8v4XNkit0pog1I5r5jQSiXd6qC7/zKBTO1JXS/ZVPGaHqcQwAFYiwhMolHHskpjsBcptNvVxQMNQCrHjGudFyjzwoNWDJyyFYABWoBd0FoIPf0MH61naXrY3bTuQSClNhZWexLvSAA4wZSpCdAygRaNPvQOQhy6HwRBL4yI8tg/kVXHdi+1VheFhSL3JF1wpZVGigepSiW5g7Q0d3up/6Dvbw1bpno5J9muTsDowmmp0EhrrKzyMNZ6p0pb5aARHsTKZJnlx72SQlqgCiiqgPKFM8DIBbCyzMIao41BB/GKwaExHgNplHJWSC5A0h9ZaIrCACmhL4CKD6aS74unwpOQdMWlnnwSdNZCCm8FY4wsM7bw1EO5RPLSKtDGUwrkgn95I5ytwtOSPM06DRHh8OBNEk0SslBj4Rj5wOkBq8FQchoNmMen1+dHryXHLIy5daOLMj54Rc3ROVqlTaEYlYFIHCBwJZAaypjnx9/++P01p9nKaFEslX9oLong5E7lIOyo3lJz5nNFBCTHMCqrl0rh6xMRPHuuIaaruql1UVODwWoQIrqLSsEokLlCk21cK+MsfMdvj4+vz9/8CweMq5P+oUHQ11hl1Emp5Wj0WDlQeel9uQnQSX/+8fKd8PJGVU3KkBhdoxeGBmtjhxyx3kS0yCSZT7NsraOZfDmf387nHwXYuKp/BH7dmAiD7wlN9pJV8SUDETBONI60AFBFCJgFtflHdww+CCa2rgGhN9mwkkJUA6ypa5GaT2E5EL7IUb3vo3aGdtQkOH3QBYuSgQkaP03pMGOR9gklQHMGx58d2D4gfmqYGGzk07pZ0E5lTJCplAvdrnjpDYvvos9TU43Zx5vI4K7VRHcczylCV4ZYpDZfMTa+ONK6b1za139dlN3+5DZZ75bLWON9FAYp618eCOH0seGD0/bX+AYyUx5czH/9gduqnxkE3c027PcHg+EwikaECWFaYzydpvvyn9mGPqTvoigaDgeD/k14u+rWI9kZTG4Xi90yns02m02arkrMP1G/WVWfp2m62cxm8XK7XtzdjsI/ARBZpIC+TvhnAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 120000,
            ap: 4000,
            dps: 2033.9,
            speed: 14,
            range: 120,
            rangeType: "範囲",
            kbLevel: 5,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 2033.9,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "619",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQGBgYHBwcJCQkLCwsRERIbGxwcGh0gHiEpKCsyMTQ2NDc2NTY6MkE5ODo5OTpMSUxVVVtWVldRXztYV1lVcyZjY2dnZW9vbnFcixhycHZ0c3Z9fYOBgYVkqwGIh4yPj5KUlJmcmqChoaGhoqenqausrbO2tr2/vsXJyM/R0NPc29zn5+fx8PH5+fn///916ViEAAAAQHRSTlMABw4e1d/0F0Fdc8jotCcxTZ5riVZjeZvG16m7lv/L7f/osv/X//b/5P//zv/v///////r///////+////////cZa/VgAAA/dJREFUWIXtVWtz4jgQ5JEskGyAEAIJYJaHN3YcsZIVvWVp/v+/unGcDWQrV1d3366KrgKDPd0zao3GrdYZZ5xxxhlnnHHG/wjdfquzztPOcLGatv8Df34Qq7myZrW0thyOhv+OfT8dFs5oaYxRKGJvKF90/5k2vW+u7YUoc45kQRmqKK25sdXsPar3t8WMaBPTbm+dUpxz7TNCpCPaaqNjumrChtvx1/z2y6FXXyfpslQ8CKrBE2m0YVwIrSpaXDWBO/51DTObvpm9tJLQGAoBUdEsSGQ7r2hpeDF/82EGuy8LyNUTKg9XKacsRsogalYWvip0BABHHXiR1y7NnB99YrbfEo+d1LjKmRJeBVBZACsoyTzQmg/gCw/B2F2vNZdmdqTfL9bb/GXXb+1sWZc249FaqDILQXFdEuXLRgBYCVBpnw5TRR+Pe9objqYr5g99U+79a3u4jREZnGLRpfPopBOmpttSVKhUKf7dGipuPq8/dbuZZw95tfzhwKL7hYMoOVirGQQUC0xUTR0xUFJmhp5uZS+1Ps0rcnhyhKooK1AkgqcetDcbB8xHYuEIdX0QJj05HmMVsM5IccMtdQZzEgkgGX6CMBycUK7ObZSUymAl263mdnIU6CyQiFmUzKoyVgJ85lDEQJAgvHRQ1PkNodiPWiQaXq+VhW3nZBGj8Rqq+WBya51Elt1X4PcevATlKwmoATrZ7J9/bpIkYZCPHhS4wScbX8Bic3Ry4E5HUlSgN2iFAcs0BY/LSPab51+owLQ54KB48HDqQqv3Cq/1QVjEilFGCC4IWwid95lmEQqaJD/3z79+7TfCyjWm6m7BTk/XoOFQCw4MuKzQnLNiY4DHGFgUAXiWJclm83OfbChxsK4j5dvlN/oOXmqBToq9QjkviGRlKCECcyyAEUwwkmVZQU1iq3lNeYimfxSYenhptlRgz4pSWatYRiHGQhM8B2WgDAeLlNjbcf3m/1TD4uREVJA2vyYHWwglreWioBDChnJsAewJb5QQ0gbIe83m59DMj4ZWQf5u6nDyaLXAQWoLDcGyosCFFPLYh+9N3M7B358KHOV6q7I0jhocSaEsbYa9xzPmqhCDN/lHB6Jdu68F0NP51hhmiQdGcUuwp40g2T55uBsco65MY/wbBu6PMdWdpU9EMcscNzhRaJZtCbn6FNJaNr3TpLR21PoD3f7k7naxWy7XDpaDYTfX/c8BI6k/pmtPfDkn3/Hq68Dd4c8X3K78XUGvmy5H/f54PJ4OEBPE1eTqA9sn/Jo8Ptb36+fT6Xjc7/dHdz+6zZHsjLHY25ub6+uLi4vLy8vvNb4d0fz5fvmtvo/PMer6+ubm9u5uMPoLJHrQIj5Lf8MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 2000,
            dps: 1016.95,
            speed: 11,
            range: 100,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 59,
            foreswing: 20,
            backswing: 28,
            tba: 20
          },
          stageStats: {
            actualHp: 600,
            actualAp: 20,
            actualDps: 10.17,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    }
  ]
} as const;

export default e2188Data;

