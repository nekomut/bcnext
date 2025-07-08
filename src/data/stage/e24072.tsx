// Stage 24072 Data
import type { StageData } from '../../app/stage/types';

export const e24072Data: StageData = {
  eventId: 24072,
  eventName: "島を守りし者強襲！",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 72,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "異文化交流 Lv.1",
      baseHp: 5000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
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
          probability: "1",
          amount: "50000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 24,
            actualDps: 15.32,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 24,
            actualDps: 15.32,
            magnification: "100%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 24,
            actualDps: 15.32,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 6500,
            actualAp: 200,
            actualDps: 162.16,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "異文化交流 Lv.2",
      baseHp: 54000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
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
          probability: "1",
          amount: "100000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1035,
            actualAp: 138,
            actualDps: 88.09,
            magnification: "575%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1035,
            actualAp: 138,
            actualDps: 88.09,
            magnification: "575%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1035,
            actualAp: 138,
            actualDps: 88.09,
            magnification: "575%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 4875,
            actualAp: 300,
            actualDps: 375.0,
            magnification: "375%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3750,
            actualAp: 375,
            actualDps: 167.93,
            magnification: "375%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3750,
            actualAp: 375,
            actualDps: 167.93,
            magnification: "375%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 800,
            actualDps: 648.64,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "異文化交流 Lv.3",
      baseHp: 100000,
      width: 4000,
      enemyLimit: 20,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1890,
            actualAp: 252,
            actualDps: 160.86,
            magnification: "1050%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1890,
            actualAp: 252,
            actualDps: 160.86,
            magnification: "1050%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1890,
            actualAp: 252,
            actualDps: 160.86,
            magnification: "1050%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 8450,
            actualAp: 520,
            actualDps: 650.0,
            magnification: "650%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 6500,
            actualAp: 650,
            actualDps: 291.07,
            magnification: "650%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 6500,
            actualAp: 650,
            actualDps: 291.07,
            magnification: "650%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 78000,
            actualAp: 2400,
            actualDps: 1945.92,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "異文化交流 Lv.4",
      baseHp: 150000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 60,
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
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2745,
            actualAp: 366,
            actualDps: 233.63,
            magnification: "1525%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2745,
            actualAp: 366,
            actualDps: 233.63,
            magnification: "1525%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2745,
            actualAp: 366,
            actualDps: 233.63,
            magnification: "1525%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 12025,
            actualAp: 740,
            actualDps: 925.0,
            magnification: "925%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9250,
            actualAp: 925,
            actualDps: 414.21,
            magnification: "925%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9250,
            actualAp: 925,
            actualDps: 414.21,
            magnification: "925%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 143000,
            actualAp: 4400,
            actualDps: 3567.52,
            magnification: "2200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "異文化交流 Lv.5",
      baseHp: 200000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
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
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 480,
            actualDps: 306.4,
            magnification: "2000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 480,
            actualDps: 306.4,
            magnification: "2000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 480,
            actualDps: 306.4,
            magnification: "2000%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 15600,
            actualAp: 960,
            actualDps: 1200.0,
            magnification: "1200%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 537.36,
            magnification: "1200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 537.36,
            magnification: "1200%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 292500,
            actualAp: 9000,
            actualDps: 7297.2,
            magnification: "4500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "異文化交流 Lv.6",
      baseHp: 300000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 80,
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
          treasureId: "50",
          treasureName: "キャッツアイ【EX】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 720,
            actualDps: 459.6,
            magnification: "3000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "6",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 1500,
            actualDps: 918.35,
            magnification: "500%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 1500,
            actualDps: 918.35,
            magnification: "500%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "2",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 2500,
            actualDps: 1119.4,
            magnification: "250%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 455000,
            actualAp: 14000,
            actualDps: 11351.2,
            magnification: "7000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "異文化交流 Lv.7",
      baseHp: 480000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 90,
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
          treasureId: "51",
          treasureName: "キャッツアイ【レア】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8550,
            actualAp: 1140,
            actualDps: 727.7,
            magnification: "4750%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 30000,
            actualAp: 12000,
            actualDps: 8780.46,
            magnification: "600%",
            count: "6",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 87750,
            actualAp: 2925,
            actualDps: 1790.78,
            magnification: "975%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 87750,
            actualAp: 2925,
            actualDps: 1790.78,
            magnification: "975%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7026,
            actualDps: 13175.15,
            magnification: "225%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7026,
            actualDps: 13175.15,
            magnification: "225%",
            count: "2",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 176400,
            actualAp: 5880,
            actualDps: 2632.83,
            magnification: "588%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 666250,
            actualAp: 20500,
            actualDps: 16621.4,
            magnification: "10250%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "異文化交流 Lv.8",
      baseHp: 650000,
      width: 5500,
      enemyLimit: 20,
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
          treasureId: "52",
          treasureName: "キャッツアイ【激レア】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 11700,
            actualAp: 1560,
            actualDps: 995.8,
            magnification: "6500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
          }
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "6",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 130500,
            actualAp: 4350,
            actualDps: 2663.22,
            magnification: "1450%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 130500,
            actualAp: 4350,
            actualDps: 2663.22,
            magnification: "1450%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "2",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 277500,
            actualAp: 9250,
            actualDps: 4141.78,
            magnification: "925%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 877500,
            actualAp: 27000,
            actualDps: 21891.6,
            magnification: "13500%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "異文化交流 Lv.9",
      baseHp: 830000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 110,
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
          treasureId: "53",
          treasureName: "キャッツアイ【超激レア】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 14850,
            actualAp: 1980,
            actualDps: 1263.9,
            magnification: "8250%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "6",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 173250,
            actualAp: 5775,
            actualDps: 3535.65,
            magnification: "1925%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 173250,
            actualAp: 5775,
            actualDps: 3535.65,
            magnification: "1925%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 8588,
            actualDps: 16102.95,
            magnification: "275%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 8588,
            actualDps: 16102.95,
            magnification: "275%",
            count: "2",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 378900,
            actualAp: 12630,
            actualDps: 5655.21,
            magnification: "1263%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 1088750,
            actualAp: 33500,
            actualDps: 27161.8,
            magnification: "16750%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "異文化交流 Lv.MAX",
      baseHp: 1000000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 120,
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
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "736",
          enemyName: "南国わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQEBAQEBAQECAQECAgEDAgIHBwULCAYKCQYKDwMREBAUEQkPFgUWERAbGBoVHwYcGxsaJQgoHRUlIiMdKwowJRgqKCciNAcmOgoxLy9ALSA3NTUsQgw6OjpVMCowSgs0Tw5QPSdCQUBISEg8WRFvPzdOTk1BYRJkTDJEZxNVVVVJbhRZWVlMchVdXF1QeRVjYmKSUkl9YD5pZ2dVgRhahxlwb2+pXFB0c3J4eHi0Zlh+fXyFg4KMjIzRcmOSkZDocmHde2yYl5bpemmdnJvqfm7rgXHrhHTuh3empKPsjX31inmvrKnulofxnZC5uLbeqqO+vb3zq6H5sKTevLfHx8b0uK/Qz8/2w7vU1NP2ysL3zsnc3N341M7k4+P84Nzq6ur75OHw8PD97ev09PT99PL79/b9+/v+/v7///8ctFNpAAAAgHRSTlMAFSEsNj9FTFNcZXaAhpCg1PIECqq1vtvry+P99uv/0vfs+f////b+//7////+/////////////////////////////////////////////////////////////////////////////////////////////////////////////1OtcNsAAAS0SURBVFiFpVcJU+JIFA6IoNxyh0DGERRxQcSMERBE5FgIjAzgAUJAcVxg8QAvRkT6r08HcHed2pEWvwqVDlXfl3f0e6+DYe+CQDn1PsKv0BAzH+JPLXkkHxJQxBLyDxlgqqQ0HxGQU7U93Qf4/LlcNaNUTS4gc1ezB0b1xHyeIXucqpj4EwtIXLXMXtUyPbGAfKe5mz23z04sILCfeyt5cnIL+Ia0t+KQTsRVq/li7efVFYfLOFkMhWbbxmIgFA2sriyIJlKQ2lbWGV8wGFz1GcQTKUyZo9EFOhqkfSurnyaJI39+1Uw4mRAdoG3G92TyZecLdTNC0hJMbizS8wJ0ukDzUv5QSLy8vcg4JXItchhVsgXnf6pXvhYnbJ9Qi1EkwtRaWzQIBYSj1Os2t3EJakcTELhKYYsyAR1fQwxjptZvbyK3IxVOO3ULTCgUNBhp53D38k3xNeSOKlpkQmSA8TFBgk6uywb/CS1xC3L4FHQ0HGJCPrhxGGZdigl4XBLiBNpUEYoxPBAKM0nfAhFIBph1jZaQDJJg4CEJyEmtMRiGe4ZIRJxRX9JmqaagF7rtbRzNfo2PJn1R36qlBioLvvCG/QZk5ZjaGN9UoAokoyHGCXngxrIRImsAHGsGSUBsJnI6HEpGySoAoO+inTF4P9di05a4FXGwilYYX5i2XzZr5zVqkTyo1Zp5JU/yR9yEONpVeCC6SFodHFwQg8WSYS2OPFMEJtJf+9F97vf7gAO897tpyyZiEjBs2nQAXvB8f9/pdO47ACQIxCRgU4bqkDx4f6tcKJUKLQAuCcRKUOO5l7c/PUGNx3qxcAGf7kjEJEi9Q/rTxUm5/L0NJW7rz6Dd+MuClgS++XrA750VSmyJLZ51uKeLQunoM1olSCNDAxqQz5ZPT4vsRbtdL7KnRUQBvDaI3/MJxz/6ssWWSsUiXK19QRDgqTC+vTv04IRl2dOvBLlfhhLs6TeCNI8VUCtFmIAapfCsCE3gLChDC4rl0taf4y0QkjJs2jPK4S00nAtCsfy93mic7O8jBFG6hnMC/SeIHrg9g6azZ1edy0r+wG13LRNKzZjZrvu2zBN4QIs9OWEbcB91Wn8/PoOHav6Yct9109ZmDH97rBiPtsRQ4OqwUDhscG5UaiN/rimHy1EBD9a395L56KsWutC5arWu7jnezvVLTfVurrt98GOcwH59SeIBj612uzXYf95j8Arn+rc7Al4BGT3nQql0WOcIVdIb2d3ZjURisVgktZeyj6lHeRo8WKhBEMsDAXCZc3iz6fReCsJqko8bTIL5a5BzwyruwWtktWfUG0DXjvClIHFcn1OvvO67m6PVHYlyMBHPuz2vBHqul0TcjC8FDnyF53cWzKMdMadfCwBqN5PJ5g7ylYoF7Xz4i0DV7d3xez0U5XJRVi3K+Wj6dRB7/X/XN0hh5Jmb4De4JJG6qtieiCUSMfgbIBbz+3cjHspDOUjEI5bGm7fP+f26WTHErGQulSOJRNogFosQR+OMv6kXu90iTAUBP9Vix1pJIiND4qpEUo1OSVrn9ARhmBvAYIBLJUHgCqlwfBJUszKFDseVeqPR+I+AUa/X4zqtQjbzvwI/Ach8i4IBlKGOAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180,
            ap: 24,
            dps: 15.32,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 50,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 2400,
            actualDps: 1532.0,
            magnification: "10000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "survive": {
                chance: 20
            }
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            count: "6",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQFBQUGBgYGBwcGBwcHBwcHBwcJCQkJCgoKCgoQEBAbHR0cHR0bIiEhKyooKSomMzMzNzg1QD8uSEY8UlBGXVpVVlhBZWJjY2NMdnJxcXFUg35bkIqBgYFmnJiSkpJorKWfn59xv7epqal6zsS0tLR3182+vr6L1s7Hx8eR4NfNzc2Z6+HU1NSe9erb29uh/e7i4uLo6Oju7u729vb7+/v///////8noTPvAAAAQHRSTlMABhfaJDD1PsdUY+r+obJ8iG2V0qr98MH/0ub//+r+/////v///v7///7//////////////////////////wD/q/8UPgAABpNJREFUWIXtV2t7okwSDUTjJUYNkYjS0DTXhga5Q7it//9fbTXGxNnJZGZn9+NbH3xEu06dqjpVrXf/+h/t7h+AfwD+LwCfJojTxUy4+1sTJgtpfjxsJn/pLy73mmn6TFsIf0ViIh39Biw39tLzQhQm04n43wBNJC3O+/N5yB3mO8ft8/5w2C3+HEHcHKMm787nvmn70tcfNZbn3n76x9lM507ZcoDz0EaOoehpBKatpWfxDxnsvbrNW84gjZhulEPps9g0PW0j3gnCZPY7HHHntTUw6Ms8zX2nHoDK0BisTrXNbCntD9L0e4DZi9Pk9TDUKVjegT9YaUR5V2r3mp/m5u5bDsLG9OOy79o6zUueyWipmaZ1n+peM5zz4+xbgKXGoq720hIA0u7iP0Rmw9nETgQv++8FOl0f9MjxO2BQQ9QxhcFz2jxthiH1y87Zft9QqPNa9bqh5ABp2bRdxwk1aQr5QGXYcfGtP5i4NdszByjrMudW1k1bpmU/DOc+Ml5+04U7YXFIoXPAGTgAgRY4wEMJoP3Qt8DgN5oUJa/lo9BDVGDRtA0QqTtQdhv7HmP60/dSEiZr3avH0g1dU+dcDVDLvm8BI/YdE71spr/mIEyWu6PB3tvHQdq6BjX16UUSnBfT58tfkpjuNL9s8mY43xj4l2X/8dg3zqv0Ky0861EHzbo5zq1Lf/ygi46br7MQNh4Drk3a3Rwfmnhs4fDOpoaSRC+bxWzyMwgAAINzyW4A+tTPwbcfRTmcO98w/K4xde2wf/4JQdgcgUHP/P587UPqmSmEjR3T46PdeQ7zDK9NPcfzvpiKyWZvxnVUQ7wOVhFvm8P9I9NjjlnyuaxzFdZUw9Ku0b7QlDDdHhloOGWmbrI4r1vI/pybcc905PVn5vXRaqUz3pfe230l6+mLn+cQ2mExLIFLMZjT9/pKdrpz5PSloZsRFLrp/C8BYCWlZV2DfvlOuvSPAzgyAoDSZG3NIJkuz9n+y9tvsjbAH4Tbt3ytde8bqW9jB1KAcTQMFEFby1/dXJACM5wI5mfoYZyasZUMbjrHSIdh6H1s6VDNc66vl8+bxU+iFhZH04S7ZNyodRzDbivboY91jPWI+Z6nW1T10q6PlFdN0w7b/5wsUZLNEgJ1OUv7JnJ0hHTTL0vTDRRZUVRVsW1ZVgwHkaCoitDa/zhZsE68cfCG1nOa2FCtIElcpCiyFaqEhkmAKCEuWilu8catcF82NwjC8uDH9Vh5EB8zEOXHqoTIKzvECbwPrNBK3jKMs9G/CrF63H4iiE8eNImB7och93UUVJdjhSW7IeE+RVYkRfWW4GD8gmI7oNongriLhh7UNjIw0XhotAy5WVgBF9eyMCZB5ZKK+xN6Op0C7SMLcceGcxnz4a0dRKure+CqnDMEVBSs2C6g4eKtCqzgxI0el++9EJ7Nps9L8I9NxbqUCc4hhLHqVm+ZTTEKkFVUVQYJJfbF/3Ry91dRT/YwQiDlSCfXBAqKoPyhDc9QABuhERkACpe++59CIonXNq5fdUPXVRLi8OJvgzs/Y41dqKiCFLt6C3EWuuEV4BR8XLnCdM/q3EFhqL7XmQSXcyG2ed0sKAKtKgtnNDh9mi191tGva8OubNnibUvIxzHKOVWBupJt6qpuQm/8T8HhSkGUjMhBSaIqiCRAwP44ExLsUhvJ8kpWVMWlPwCcyMeinu5URDOiqjZyq8K+4UlhGmQZ29DIkCKQUBDefPmxIYXFo53ZOCCWi7PEvQkSgqeNwirhDbGAhooteq3QZxmnTzLGCoEYFNOQhjdhbFxk2K0q4sJQqC61sKqo2B5BQm15iT/baRbkj7GNiIVBuCpxr2lQlFUENOySAuYphBlJAluVZT6nUIQL/70VEBwURYCJatmAQ/nLu2RRMgIEoOuC8DZnrvZ6v35av2BqSZd14AbYGhVjEfXVzTKYoIxiPIqGojBD9O2NYs4gKBJX2z0vpqIozrZHVRr9aYBtGBMAIPLLdm8l40BlLrYAIUABVaCAxIZZeD1qB2lx/SEvLudbvg5IgklWVbCrXPlxvV0/wkrKiqIIiYzpKVApkukbVSHMi7R5XsAfAeF9NYvLGRRw/arKCrEsgpTV6uHhYQUmqwjzxxW4qepqRUIkq/Lq8f5+Pl+v19JmcbmmAUhcSvP7+8fHx4eHd+cfTUHyCLgawR8e4OTj/fxp83m/COJkOp3NFrDwt0/r9XwOeD8bfLx+ggSWi8Vsevt35t+foBXkiUM38gAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 7200,
            actualDps: 4408.08,
            magnification: "2400%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 7200,
            actualDps: 4408.08,
            magnification: "2400%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "2",
            spawnTime: "123.3s",
            spawnTimeFrames: "3,700f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 16000,
            actualDps: 7164.16,
            magnification: "1600%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "737",
          enemyName: "南国ラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMFBQQMDQoVGgseGRYfLQwrIyIxMTIyMTEqPwsxTAs/PjxGRUU5Vw5AYhBQUFB3QTlGaxNeXl5PeBSOUklVgBdZhhhtbGyuYVZ6enq8a1/Pc2WOjo6yhn7kemrqfm3shHOjoaHziHitqqrrlYi2s7PypZnAwMDztq3MzMz3xr7U1NTb29z60svk5OT63tnx7ez59/j////j+husAAAAQHRSTlMAECY5UWR6jpup7/+53834/eX+/u3/////////////////////////////////////////////////////////9092CAAABPJJREFUWIWdV+t6gjgQFRAVEYhBkJsQg6VSFRURUQp5/7faINrFHyu48/WS9vMcZs5cMvR6LcYM+LaPvDVOBn8EDPM5ngeu/iBgh1L/Y3wfIL8mYIaKPv7Ig8pfduwifCfoS3NsDT96uMDR77nvYn3Q6w2A6/uQ+wTfV/geBzCy/fmQ4hHGSP4oAEkXehPqgOtbQx5g7OL54BOCAcQSO0bYdn1bUpBPf0OW6Q+Go2EnJRmJAiYQY8vFrmj7yMJIGk11ywLdCHhIoxctvyJA1S/btxQL+Qh0LMuJjRCGbuWBa9NUzu/B4M54RsEURfE2AJppQqDju8GuOvYhVQ37FtDCrCQkjzSIMHVp1AnNMr3BnBIgqEUUfbdipbj+XOr2+AnfG1m+bYGANCwCNpx1UoCZSj3B9V0xJEXZYDiIYWl0YWDhfDBBmD4/Uc2kyVCQfMqyrQ3BQR8qGHqEZGqweoDL86myWyIprUJwtIasuVF5HxnPGMrf42a73dyIp7RGwQLkIpDdcWb6bwSX3eZCSNohExJyQViDrn8ylqQsLtVBY1sJRpalNRNIitvt9y8fYXsiOADiJv682+22xxv1Jye380+HahS8Jv6y2e33u+32dF79nHb7TYe5NGpmvzxu90ttQ73YfK93u/Vm2opnps0CLPe7vSau9zQMevoWF+0E/ZcIyHmz26wrGajt1tqynWB4aGaAlCcK3G6P59vtctp30WBybQSwo8DL6XS+leSa5UVx+2m9XV4kKC/Hzf5x9kSRBue1NhNrNCK4nS6X2+OcKbTDs/YIuKaGv/vt9vL8w/RI5rUXYv9lENHa+620DJKD5zmh2qGM+LABz5IyyKtD4onhVfOk9lZ6JYhNEmnBvbc9x9DkDvgXgrKgI+W60gzH8zxRdTotCC8ekPtULK9pclBTkv0PgqCWNAk94DjdPKizED+G2VXNSbYyzCBK03g17bJl1XUQPcspWCVq+Czuqye0X+7MjFS1bEQPHTXQmKwkakskNxCUe+JTNa8hh9cBGcvvfGAn0Ebz+jYJtaKGeC+qkvCdkswEImSpdTsGj2slf/ryiEl9K0N/DHVo1NfKyqiRgfeAVl9Fy2Dndey6upknlfChUdQuFCQOq7qkhOYhn7wTAfp0OcJA1+GqLK9OrYPmhKKSkTSKSCiqxbupOKCblO/rOrLduWHMdajSUk4AHUYiiKIwDeghe0cg265t65CGgX1A1xQEVcNUvRCIlaVRRZS8C2EwGgmjoY4R8l26H1OCkLaAF5oVXilj+nPVfjuyuk9XS6jSJRVbTm4maZ4oFBqS0lHMfNZazRy0dOilByooRmJSVuVwDYKE0FNOwg67Is/LtBNKc+4jPTCKZwmlDv1v/E6BuzEsx7L8rNovDR3GV9F4FmJJ141w0hbAaKqapjlTNFpJZZBEigK09JA9vWi9V1jl64t+vCzivAqZRHFeRrR48rjaL+JWBRh58fWdPaIOno18ULM4IFFCvGjW4gFn7Nffh+jOUKjjetNIk5WqaqE2mwmDtrnOguXy65BUIccznptWY6lMkni5UAW2y4srq+7Xy2WYkcQR6MOYER3rRRhG6+Oy46uCYCy+N8fIkXnmbrzsHIriZ7FUO700coMJ+FqqtGzH0vhu0pj2gLlcL8ajId9+sXH0tU6YyLIkPfAVhSTJsjwRhP8g+AcwICj+SyWe3AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6500,
            ap: 200,
            dps: 162.16,
            speed: 5,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 37,
            foreswing: 14,
            backswing: 9,
            tba: 12
          },
          stageStats: {
            actualHp: 1300000,
            actualAp: 40000,
            actualDps: 32432.0,
            magnification: "20000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 30,
                distance_start: 300,
                distance_end: 800,
                level: 1
            }
          }
        }]
    }
  ]
} as const;

export default e24072Data;

