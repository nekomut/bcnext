// Stage 2047 Data
import type { StageData } from '../../app/stage/types';

export const e2047Data: StageData = {
  eventId: 2047,
  eventName: "開眼のティティ襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 47,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ティティ進化への道 超上級",
      baseHp: 250000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10192",
          treasureName: "ネコティティCCへの進化権(ティティの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "089",
          enemyName: "ノノ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgEaFBUfFhciGBkkFxgkGBcpGBonGhsiICAvGxwsHR8xHR42ICE6HyE8IyUzLy81MDM+NjdGMzQ8PENDPD5GQT9LREVNR0ZQS0hUTE5NUFxWVFRjWV1vV1ZkX2B2WFVsXlNoYmRzX195aGtxbWx6amGIbXB8dXN4d3eHeXaIenSGhYOPhYOMiI2RkJCTkZKYkY+fkpOnnaOsqqqwrLC2qa2yra7Gtq7Qxb/Sz9Di1NDu5eT97O3+/v7RGhABAAAAQHRSTlMAM+MYV0kyZ32OCbr+o+XU8hBXQv7nbyGaOViz/gP/7jGfct3G/k6L5bEU/c9o//Ogjtb//7jT/qf//9z//P//arl6qQAABD1JREFUWIWllm17ojoQht3FF0QKolZEWUQhChsFNbExSPD//6szQdvt2yrsmQ9eYjt3ZuZ5GGg0qoXmb3cfY7+1K+bKsPfn4vIpxHlrVc239l/SZZxXVQErcT3zIj6CjlUB++v/Z0V2JRXFpSSJqoDTK+BS5FmWZ5RwWguwuwFEnpcFCFGIWoDtbQZZ/mmKVQH28TsRLmJbFdDwj+IbFfeVfQA1bE9HiOx6svx63K9q5L8Wci5Pru7Az1Ea8rzS/jXfPtfy79cANYsX/9/ztdOlOP6PfBhhcaq+Ayz/y6j3Ylc9X1seVr9vX+2VI+duH+sYx4lQ6GuWZWnO7oXFigRM78pn2da7v2sL5KEYzHfab1iCdo+Ut1br+LCJt2992xuEuSggRM4R2j2qN06TJMEkPWxvfdsRzYsygJIn8f3m/Q2kJwjhJElvc/ZTUdwAknC/BTsmGLKR5yEoY10etuKQmpUQ+Xn27wGmEYazSYIx1EBSaXVrBw1k1yYymIU43evBcpYxMLAcQ0KJLNd+EUVORVlBTrNCPLqDLHsaYAw9YMxeYApTBidTUEAOgTCRi/19gNQNe67rwhiOvxqNNQAYk0VIAIFNfqcHZejYtuVE2HseDwaTcPkLbMREwXhOSQYASlhGJfZvgMEs2IQbECEYyktF6gouYFQ+PvI855zwaHJPSEDME89FKFwuHfnDNqVMAnLBCGHyM53en4AyDaB9z8N4M7Ua9gHEEJxRhOExxhHhiD4aohVDBVEATphv1us0oTjLEmCCnzjyEsyOD+5kLUbBxLGXYTwJI2koTDKUULBAkTOa0FLcuzGN5N2uWZqmDBcIApOEM3lDwgORVgBYgz9j3lMCtgZXEQ4iCFAzfdjCh9hykiZRGMxmc0zoIQ4Oi5eqj1FNaSuw/MJxFA+ng8Xc87z0EMzGw4oFKF3TMFXNd7SV31BmGQFlKcdeMBk7VRDaU/9J7Rmt69VgnucEHJF4KByMJ4ul8hDQNp46T52+Wl5YM5cKmCJFaD6Wy71CG61+B2q4AcZz12PwVkRwNH589iug2zT6ZrusJoLbG0EBFC0qP86VnqG2mmW+tsCwHhDjhHqb6h5omf2e2mmBlMNIAkADD7uRUxnQaKu9nmkavVZIPBdMUK5rtKwOkFZS2qphIrgVOEgotyR98Fz5BtIdISZ3UcZ4Rhhn67oEVR9hJt+JWZZxue7H9d6rlHCkjxLYxkTWQChGRqcWYDj3gOC5sEk4gcXg6nqzFsAOMdZ1F/J0SRqNUK+qF2/hRJH5TPlI7z/r0Awa/WzVA2jLhdIKEhQMhk21CxPR65agtRuKqetP5fCVXn0ARNPQ9dvsu4Cqnd+BfKP9BujWzW/J/M7NPmp9gGzbeNO+qetqvXxt3NfNP95pG3UB/gGZ75RXAryuB1hz0v3xLma41kpoNHuR8fNDPPfUvxjhPzxs2wntF7S8AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 650,
            ap: 150,
            dps: 67.16,
            speed: 8,
            range: 180,
            rangeType: "単体",
            kbLevel: 2,
            money: 400,
            freq: 67,
            foreswing: 22,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 5850,
            actualAp: 1350,
            actualDps: 604.44,
            magnification: "900%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "088",
          enemyName: "セレス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAPDw8pKS04ODk3P0BIPCs9P05LPzFQRCsqS21RSDssUHZQUFBYUUU2Vn9UTl9iUjBYVUpmVTlsWjtoUnxlXUxpX0M/Z4t4ZUJybFBAdKY8eKduZouAcj99b2N/dUyCdWGAc4xHhrt/f3+Cf4SRg0qLf3COh5WPjIGQjIiYmJiWl6SXm52gm6qtpHqypLaxrbqysrS1tba9vcrEycvKyc3Ay+3Y19fc2Njq5+fy8O/+/v4mf4XxAAAAQHRSTlMALETK6oMHH60J10CXU2CMI8T76rAQdIj/OEzNyx7+6P417Fyu/v8ClHnN/D9jnbeB/pDk/suw/dn+/+P+/f//PRGwygAABCRJREFUWIXNV2l3qjoUpbevIk7FgbEOKMRXiAqRQIgC/v9/9Q5abRfeIvjp7QUSWOxNzpCcoyDcIG2CXV1sjZZQxizOTrWRHwOpxFfi+vQC2bYksL1+P+eMZTnPT1kO4zQ7pfxyws1PhaQksL9JE0o4J/TEeJ4RluYZ6FEKNzDO4bi+VxK4WZATAgKcpoSnKU3T8y/ncGQwNbj8IhBclXMKAgwYKWc5L0acpRnn5+v1JcCxJLA83mzIsrMDQAsOOAvv5F/jb8Qlgdb2eGqAPDHKeSBt4+M9LhZn5cfJ/o5fTEK+R3TmB3fP7xPx7zh75rit+/o9itgc7WZ8ZbYsMFOAJieQcZtm9O3etYFv2m6wUSC/o795qwKzaD+7rLPZPpbjPJ414wvS0nVt2zRt291vjCSWG/ILCWVmGAb4QBLcndKcL4jmp+/7n6YIQ/EmIEnlDeQXtEyfHQowH6K3Cb4UJNNxa82mZYeHK1gA2a0U05AMtaepdp05bL75hwPf7SJFbgNX7apdyV0+5ivx4ScYS2a2MzEHPVHrDUz3sYAJ9rMbnzKaLFVtqqmdyXTSmziPbfgEPr1oMMYoJWmgDh1N6/QMrdd5LCD5hwOh7IBp8X3YRylP3KmnTlRNa7+p1SZIhiSI4EJMCUOFAAEJSmjkTNX2QJt0Ok71qlhGS8EGksVgVyYggBlFzIsi1XO7w95ktVKrV7Wd7vsOPmCLEpxSygjGBIWD7qQ39Zzx1PPsllLpA5sf1cGKIZ1SHRGCkWXpyBPVxUdb3TmaKcubIPj3V7q8McIsmgyJpRM2X+MsJfPRWP+Qe6N2T01YEsdJEldsLctk7/E0HMNnyYEQCjWMYN2yvOm43RsEQXyME79qaUv7FDzOiG5hxgiFCpgxYlkIjTuDriQoykxRqheTvIOCSlKCCHYiKKhpysALaNjuVtJ+CPghIyzjGI+7pkPjGIKhIzysy4e6lEBFhsqOdCehK82BMILAg9j/RKvrEAg/hfDnGS6ygCBrKNbmC0LXZ5xiiovibuG5RTB5lHwlyIZ2ngHCeKSPrMZ8gKh6mIUrxCxrHHrTSRMDLmiJpvo+tqCp8T+dSe0I3Nhi/73dGc0hm4r+yG1qQL/TGY3mQId81hFtWFQBXfj4GjAv+BbSGlel1vuZvy5WMrbG/eZdhfi+mBd8vbBivnhCodVfrDEYALDW60W/sYAg9T2CkF44YT1ffzTPA6gMxTpG+ni1nn+8PyPg8pRBMquG3Ref6s3s7MQQDhs2Rt8w/OxEEQ2f6GwKtOwE2mxMaPxMawOwoS89YkzDxll8wSY5ZbG2ouH29wJSBTmC/2IybGzBkwYMwngpfmLqP8kXxMFMEKckqtEKVU3De9KBV7Sey7//DV5eXv58AYaN6X/eXl//ueL19fWtlsR/8lwC95Qzp90AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 250,
            ap: 50,
            dps: 26.32,
            speed: 10,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 57,
            foreswing: 26,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 2250,
            actualAp: 450,
            actualDps: 236.88,
            magnification: "900%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
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
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
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
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "091",
          enemyName: "ノルン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEQDQ41ABQgHCIfHy8mIiIjJlIvKDoxKz0qLE82LzAzLzwxMlE9OTUwN2lKM0FLOCtLPUg4RIFURz08R39aTENaTURYUEVpR0xkTEM7UKBiVktuUz94WVBZYYZ3ZWB4Z1iBZVWGZU6WZ1N+cWeLcFhsdpSDdGqUcGGfd1OHfneod1aOh3SPioa0gFZ9ibeUlJSvkn6qmY2tra3BtKDBuKbFxcTXzsna1tPi2dTp5uXx8fH6+vr////AcgXSAAAAQHRSTlMABssWBilPC/5mweYxgqAU/85E/vx8y8BfJf3g/5qv/v7SfZPs/0O8/vyl42P+/uz//562/rb8zf/+5v/9/v//3nFsMwAAA81JREFUWIWdVgu7sUoYzbHJJUIuSUwuQ6GQkRlT+f//6rzT5uztO3xMq55KWmvWrHmnSVH+hLrchm+xHf6Pd8cwvCRpehX77XDfxH6/TM5b/TlfD5P0muF2uv9Iv++k978uy+cCyzh7Ioa2kuR6TeKExSlYguvv9hMex5na6blAmDVDCWUp5SlcRBGHA2PXlPH4yjkPKM0auTzlF06ZY8YZi0kUw4lxUKKMplcGxIRyknIunomfC4SpsEcjkrEYpUmS0JgmlCUxFWIAwl4LKFthL00oZbFgxlwwGb9yBjkICyncikWO5xejcEof83+FePtcQBme4j8G8BnSS/iiDsDDNjz9QpQVQHI+PSBcqq/4Islf0M6CH4d64QF/YT8LNX5Vt+8hMr1e8vOV5QXy2v6tv28AU+v8YtZ8hOE5ycm/dXrLT6/fHK9QUIfLrZZdqmEox9c105zNV5vNWP/KfptS8avmarPP4K/W8052Syb/gnmjZxKTjlrsjNez0ucSncX+Fza9UnWEMJ7OP5UYrvzfAvtVb4QQwr43Hc8+SVJfP/L3vmW1GyOPBEFEjx+YGG4e+XtstTX9GBBvsInOHwxGRxjwAbcTtoxqwSTr8VTTVtEH1djBQPXh4As+RpaFe6UpsCemau4+EbAEE4N1H+M9CGDfNHfjglLqlYufpKiNMBjYE4IxwpFvYLwwVztRTVBM6td7AXWCRNNR5FuIUGL5eNHbTYvviT8C2IemOY+QTzkLMJpMyUTi3af2iI+QZ6GAEBZ4HkLzwaghIaAMj+CAOC7hnLkuCEzaVblX2XK+8KPDgcFyRoiHFu2aRAIZVHMRwRLOYafT0aBdleTDfGiYIXwJsMt5Vm40pQ0AisWm4zvjpa4USjV5A9CJRrfrOX0TwivXSvL8r2rdtl1i94uK2pQawhvK9YptB8Tpq0onjwG1Wal0wQEI5DOg1SuVlu247m62HmnyfMitLizYLiPsLL8gQYbFUi0TIF6US0B0ogUhBo6BVvm+CBqtrkMi4hj+MZeAOnHcQxB4Vn2eb00v11uOC5tRr+YYxKwOWrZtd1uVVj9HGWWFCGNg2y3D6DZzfBaJQrQzBwYo5OgEFGLrR6AvXYqFXrfrZPxuFxRc6clQHDjOAeC0HAcEDOn3iVquGVAGrusenGbdMExZAaU0QGjUyKDVcggMVwgtzO+Oq23DGEsOpDr3LOtO0kaGMZKcj4V5gNDdtjaw0FhyOunHaDf+r9HOwpvJ8ZXOjsx+eq0PkKRAYRysSsUfNNFMLsRSbfHPA6xao/xRLf4LiibQ4z3PLcYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 19200,
            actualAp: 2580,
            actualDps: 1887.78,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "090",
          enemyName: "オルガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwQFBQgNDRcTFCQeGS4fITcVI1YQJmwnJkouKU8tMTEjN1QuMl85NF0+OmAzSEQtRoxIUFBOTFZDUWBFW1pIXmFJYWFVYWNDaHRKbU1pW4xddWpmc21iaaxmf4dvfXyyV6Nginl3g4J5jomJhYxvj651jLKAkIuJjo+UlJOLmpTMerx2q7qmnJSgo6Rgy8KYtqmtra24qauguLOPx8LDvbCW2MnBycnQz87c3Nzg4OD639Hr6+v6+vr///9z5y3XAAAAQHRSTlMA48MsEj5ulPVSqgnE3/16mPwTM/7DWeSA+62e/CT8xT3//lpy///miguewf7//1D/1rX+if3//9r/6v///f//RysOgAAAA8hJREFUWIWdlw2b4TwUhu34Vi0ltCXKtBIdI1lkhIjW//9Xe1o777w7ixVPXePimufuc06+qlS6ol6cLO8qiXvXfJ+abdMsy853riw9xNZN/+SQnf+tY3zLby0Lf6rTLE0hitbZOVU6U1LKNNUqPaf5P2TbW4DeobiDliLTCiSF0lJJTTDhWnKuz0oXEW5WcMz5mRYSbpRKpQAjgcI5fAMfsjOEyCPeAvRzwDmDu2qti9zFpbngAAD/Wad3E1jbSw91Xr5OiwtCQPXQiIIA3YGhONwClGbHBwbhnM5vAqz5t3G8MqrZMbk9D0rWJNl+aVNUnB22/9dydsf/TcvLqPcfNnxTMS3S5/2lGCpIl3fXzl1ZWxjQ5Hl/PqbH+eMN+1tJdryzcK/pz7S9w72Ff8U9iZP5rPdliTezx91vk+R9s9vvd5tk8pljaDB8vfhdyv1Fm7l539/mQki5+03YfbyZAvqL1UqQT8B+b0rojV9fVyu2/9KH2egNV6DPAMXbYWIUYPr6Svh/Hdjlr58mgD7hBEcAYDlkx3ag21vOFU02PKIRuDjPvST/c/PkuCYrYYxFO8aEBAgRDELMTAC9JaOUMkakZFxyQSjbmDTRiheQgDKiTiepTvokCFuYbEL96bQAcAWEQpyyscFE8AFAOWEYIQ5ughUP2WJoAFiElEDsIIjo6aSjgIQhowaAnr+geQLonYAEDKKE1KQJlfI4pCGiVAgNACUJAMaVxwHVTscLQzek/NJEid2BN24+DrD8cWcQet0gxLArcIJatWbNNztMKp3xotlyHCGw3W6VSwb5f6taHXYA4GBk18zdF5VtAATIbT8LaILfIRzb1ef8lbwChwvs1J4DQAW2jeF5zGk9VwNUUG8hWM2OXX2GUOlAdhsRyZEz8I221IvidxXYDpJKYEQ2RlvqRT/TVAQOgqdbEWC+NI8wOygawdYMOyPFXN57jrumam2kZMR5tAYxeI3NzlerBdULh0vYEljOWO8+jIqYvFOEYBZxDFXQHLA/zIwAB5IDcMTWDBBrOB+l0dFkxRgHGBX3ZlHElNoZHQxwPHsexjCP4WxcR5gKMp2ZPSH4o9EUIwE/TWAwIuy6HSN7qekNBqOBg0P/YznF4HcNdsRcVS9wPRs5dtnqjzBy3EbdbD1VukHgIhd5XX+KB57tNkwJVRu7KPAGXoA9z2+2G42GURGVrouw1x15QRB4vlUq1xuNdtnAX3fddmc0gADeaJgvo0rNqIiqbder5XKt227X4L1QrfHj8QiV+svLy48/BJ9fHgD8AtB810Z++Rp/AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 2400,
            ap: 240,
            dps: 80.9,
            speed: 10,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 89,
            foreswing: 20,
            backswing: 25,
            tba: 35
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 1440,
            actualDps: 485.4,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7768,
            actualDps: 3699.04,
            magnification: "400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "092",
          enemyName: "よいち",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMEAwQMCAwbDw8lHSAvJS8yJis1Lyo3LjA2MTE+Kz48MzVCLzpSOUBNPT5TQEA/RXZYRkhSTEdhSU9hSlVhTkVeU0xzVFFtXGhyX014YVNwZVt+a12IaluDbGl8dG6Fd3+QeGF/f3+LgniLh3qlfmSXh5mWkIakjYCXlZWYmJiZmZmlkaycnJzDl26mnKa2pKLKpm2wrqm7tZ/csW3KwrrNyLf4w3DXz8va08nm3dry5d/z8PT+/v7///8JwY0yAAAAQHRSTlMANObODyitcwk5Gv5O4P2RsP/KFf/ucDzY/oWhKGbv/zv/xwOaUP/+d+OeNif/DP7O/ui2jv/+1v//6/79//8BEaAU5wAAA/JJREFUWIWdVuF6ojoQZbdaERWpoJgqRLyaiJViZAmNwPb932onQGu7X7uEe35QpDknk5mTZDTte+ibw/FL7Pb2P2jvWCfX8vfXKLO93sq3k+/oEtd9q8Ch5pfNn+pRFAIe1Yekja8n1bicR6LkogSiKHjEc/hSh9AmYGT1zJyxnFIBLJHDewlC1T8KxQgEzwWnjEMQOYd3EMjVBJoclIJD6LwQon5/F8haBdbZP4rwuzi0Cmib7Ps6Xg/tPoAYDkmNc1G7J3nDcaPCf0fvWPETV2l0fzBdDP+KJKv4Sv7XtKnjOLPPCrIexVGR37NAwLGMD5+kI4qD8S3lM/oTKTAf9G6fNlfFpFcYVgLm5MMiDuVVYfO+YWxKvmnev4dgZ5nXoWgDpxaYj9++eOeNOl3r3dd807HeQnDVyt+gymEl4I/bR3+BseQihAOMLNXCfcLUNBEhNBZwCEx77eP/Rn8GcxNCIs559H8W4fmEYIRJnDJG8FbRvTfoR4IxJukLII0J7ZT/WqBhVwppvOgssCI3+kv6kqw7CvRW9fwpiUkcx+ll1zELYz8G9ktMMOGQTXJxm01gK26G/hamj1OooyjSiOC0uQD1xUItFCOUqSMxXAVFnguSHuuZ7dVsoRTDPpXVw4zncIsyFsdhVcjnJ8+aqRhbP15i4JsjkxdFNAJDrcCMr6enZ3uqJuA+SgHsOCDAUOBvoYzPwNf03U4tjZswhgwiDDkQhPkrHcI//SebDYWbTMJ9DGE3MAggL3IGewH4r8D3Lu0NSQ176/v+ReQ5v4Zbz36G8GWzFWbKnnQXK3/phwfLmj7ap4pve2H6S/1Y7U3NeRBvJ5OBcTpJvruNefakzNd0y0GUMWZaVfo0+5heE7W+sMY6iYKABlEQbuo1XbIudHBjUVAcPDwEtPKxveXq15oEtJclfQCgIPLg9yK+brrwtf21zFEjcF7LAFT7ghrrrCx5UAvQ6Gh7jCt6sIb9qyhLFoECwohGbBcKdQtJQGNWChoEDswPa4jAld1SaKyooHCxgRUCE+H5MlbtbBoM5445GjloBE+A4y+6ncuv7kwyKa7pJlI6Rm6As2MwRyYSqBJAAep2v8qzY+ijgBXIceQNT6NQ7SyV0N21PDu8XLC8wAH0BwgEWLMhFGBYKxhrnEsJwSOwkQQ7qoZgwAnirle8Eijzmg44K5fRtSbbM+VFJZA8hpJNKVUX0IzhZrOLWC4D8HrjZYAhD36XFhEwRpWC3MHj5Rz6tVU3I+rTEQ6gClXmjMFoNOl34ttTH43m4bnxf3+Olt2caMxMbA1do1n2cDK679bp9YHx44bxfVeBH3c/7+5+fsTdoFXhD+r1yvKxEDylAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3800,
            ap: 780,
            dps: 175.94,
            speed: 8,
            range: 390,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 133,
            foreswing: 34,
            backswing: 23,
            tba: 50
          },
          stageStats: {
            actualHp: 22800,
            actualAp: 4680,
            actualDps: 1055.64,
            magnification: "600%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "347",
          enemyName: "ネコティティ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 27000,
            dps: 7043.48,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1600,
            freq: 115,
            foreswing: 30,
            backswing: 28,
            tba: 34
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 13500,
            actualDps: 3521.74,
            magnification: "50%",
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
      stageId: 1,
      stageName: "ティティ進化への道 超激ムズ",
      baseHp: 750000,
      width: 4500,
      enemyLimit: 9,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10192",
          treasureName: "ネコティティCCへの進化権(ティティの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "347",
          enemyName: "ネコティティ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 27000,
            dps: 7043.48,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1600,
            freq: 115,
            foreswing: 30,
            backswing: 28,
            tba: 34
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 27000,
            actualDps: 7043.48,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "097",
          enemyName: "ワイバーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAfHSMhHCMnIykoJC0qJDAsJjIvJzozLDszLTozLzY1Lj02MTk1MzU5NEc9NUQ9OEI9OEI+OUBAOkdAO1BBP0NFQElHQFFKQVJIQ1hKRVBKRk1MRVBPR1NSTWBWUFVXUFxaUF9VVVVYVFpZVl1bVWJcWl1dWGphWmVkYmxkYnBuZ25xaXR2bHNhdoJ5c3t8dHx8d3V/d3Z8fHyCeYN/gIWNiYyOiYuRiY6TiYqTmp23pp////8yV8lwAAAAQHRSTlMAP1ptHwoVPXNR/rqRL+cjCP/ORlluo/8ZgfTb/7A5lr7/VtXkBENv8h3/t9L9nf/r//+7OmQKg//glbL9//8AmYcfuAAAA9xJREFUWIXtVmt3okgQJRkgykNoFJtHI3QgsW1t8JFscIKZ//+vthp1sjNxEolz9lPu8XgUqMutqlsFyo8LoXwRfBH8FYKzYPdvbFU779qT6JlmHI9H+ucZNL0/HkTz+wtEKFrPjPLhBQQ3vZ5JiunnK6H2LDOiywsYFEXvMcLSz5ZS3lnNKRFj9RPRs2k5T8LhaCEwJYndNVwfJblYrQRjfMURQpnTMd7ybWe63e12K8oFMRAad6ukbsvrh5KhpoRihKJRNwkt1GRV1/WKYGJg4t107abWt3qLFUAQjBElg35HAr2va/OWgGOAQGZ3OwSgQAiQgCANalidGXxGCUJYVpEgilBHS+q9AcYEgEAA/EJG1OsSr1omoZQQ6KEEJtgwBp0cqakJ5ZA8RCLDwBBvGJ0kKO5wKaQEowWSX9b+BCAI3PeDZ5PhOIEiEqgjWPm/BHqazss0T28nwR/NpdmLothnTjmFOgwMgo4paGEu6rrigi2S6f0JIY6fJl6ED9VDUElKvAEdD441cIPpstk1dSU4Z0k6mgS/9FdPmay9tN+RA9pIYqf3WkTN9hfrplkLQYXAg9wM72dHKe4UlpC0HsYHDty6YKHbAxS+FskO06KWIgRFxCCRB+nYjuPot4Vsv+we5XsWyACb2dS9iaJfl/xwzNZtHoJyZGDOiqLI82hvHwgDfVTGw5/I9109xfFvi0n107xar6uqEnAx5/ID0ZzL5nE4CuyygnBiEyj2yJu/HQY/L4ACABy8jaewxCCOcoiHfQL0YgViypmipZMThnFCxsWBgrfRHO4N94XMqhqOrneNTLN5unPtU+ZzJ9NpWDApo5LJ7AE5yNoIGmeilt0Cgn9ORP/sqpVlc1G9AvoIemCKxmpWNRXny6fZn+MlhaaN8ohK3SzLRUURPqxzpc/WgtfPs4d3FLRwbD/08jgb6jdWkniYCmog7AV2AQlU5ezx+TH4gAIqao8CRRsPPNMDH8AjiURDu2gawRf37uP2+eFDGS0suceBgCEDJmCybF52FS3CMaufy6f3t8Aewyj2R5ZHsr5ljhRn27y8gLWI7EqxfDiDwIkzWBS2B8bV5HBtdw14UdRrMEj9/e5jAr0lUELmtxdrtxtwQjv/lVhvHz8mUOM42GdyGL6grOqX3RpsLeLN9gwFGZPPYi1l+WGNTxYwtpwtm+Y2OOfFz68SmYNe7o4ZA0PBQrtsynO6oMy229a4s8139yhqmRQTZVYubs8hCMrn1jB3znF+XX+TpLIlkxMTfQLOm0S10Or4mvSG4YL37i/831Cvrq6vv/2O6+urq59v7P8CjW8pNxYexGkAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 380000,
            ap: 6555,
            dps: 525.8,
            speed: 5,
            range: 600,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 374,
            foreswing: 55,
            backswing: 66,
            tba: 160
          },
          stageStats: {
            actualHp: 380000,
            actualAp: 6555,
            actualDps: 525.8,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 330000,
            actualAp: 21362,
            actualDps: 10172.36,
            magnification: "1100%",
            count: "10",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "163",
          enemyName: "ハルシュト",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAQUHBQgIBgkLCg0OChIRDhAXDhMYER8XExwYExgfFRosIC0wJCMoKCgyKCc4LDEzMTVkGj1/AH86NzGDEz1JMUBAOjM+Pj1GPkZRPkRJRUJKRkVKUCpNTUJPT0ZpSkJUT2RWVFRXVldZWVhgWHFhWW5nXFiBWEFnXnRycHx0cXd4b4l+fYCLgI+rf0OOiZmckZyYmJihnqKooayvqbGzrLe7tLvMycvNzc3a1tfb29vj4uHv7u7+/v7/////22UMAAAAQHRSTlMADKg4alGAKP7pzBf+YAi5mT79Aha4/08l4v6NvwdyOv3/pFQr1u3C//6Iaf5I///d/52J/7zt///V/+n//v8ActZp8AAAA/ZJREFUWIWlVot24ioUtfZhVIyaycSI1gYfMVTEolgwTTr//1f3kLicpvauhuleS8HH3uzzANL480M0fixQxXK7t8Bm+Vilu9tT/m6B/HSoKmzfbOiFxOYj3z8WX2rAe6YzmKR5/p7nKQwwvbCyLC9+NzhVElAaUErKVCudKZVmaa6BnYEWjFlukEml8izTpdgXAloIqWCFtFgV/pipPNUyy8BJmhWSQD47yD8KhKdSQEqlFayYgYI2g85gvESQakM+f36rFOFQxAkmjXpuZsW7mVSqk59fgGO1C45WVTQ5XH7qo8Pp7QuUstffn/af+KaUy2s8FwKn7dUPoXvF/wpFe+TH68X+D62b6mfTnzb8KwGoTX7wv6W54a/z7LYqsDy9v33aM19ieTEJAo8fDG/yt02dZB30/rzMbXd73F8o7vG0rcP3j+p1W07vNyd9vMT8dNzWoDcaCynUfruZbZ7CqdDyr0AY1uLfzAWV6lVz9fpCBZPHGlmrwF8xQmHPc66UEFQdLPmNYcy4TFMlKYP1hbQWmDEmgK80o4xyITbfU64EJKyvtKCcc8EnN99zqgKUaYgeTkFGmNLaNgR3yngqFZdQQUKF0ntLgUUMKQC64EJSKqRe19vpJbr+YsUY10xoASMlXMmXp/r8cLKOgQcCcBKbIiRQBfGyqO3BXzzPV7C0MjzFOYt2UAj++tyq7cHfvHDIPSOECKhlFBHKyPypfhoW65iaDsSMqzyXEaSBxA8WneAOpzEEDx0A95fWiWAUD+oHUCjM5oxC+jO4lNIdZ2Q8suEb9CLIAKYCbtFdwqa97w/RTxh4HgoQwpLtdrvx0JYODjzPwxEOaLKTO6s+LNH67XkkSnCAkyhaT7rWAt3fXkBxEASRiKKevQE4y8eUQApAAAd96wyCgwHU3kFBgClGqPcvfEaQ44BAEGHUt+oigDthnGDHAQuURQihjp2CO2OCGgMmBmgGGJpWCqNYwk4s+Rh7gZG6s+CHKykIRQUf4SiJPMexcQAJUKUBYx9FSRI57VsLA8NYwUkcgAEPokc4SRJkE4E752DACBg+pZwagU79ZoYMSNjJZnFIglLMdKTTvreJgJOyBiYD0MnIVKFZ+0QbxpISWnYRdDHUELXbjtOuXYbuGmpIcbvTCQgJHBBo924HD836++GZjcd0POiPCaEEOglFs8fZIpzVfkZZxNM+Bi6A4SAJgvHMHU38ee3LrTudz6fQzHA1rDvIbGa/8ei7o/q343AynU3nq3g1CftmM1mf6I/+aDgPW0N4eB/AsTi2eKy+wA3LlN1BCH37E/UvbtsBGvyAf9PqIOfhxvYBq0Tr7qHZbEIPdmB4uK8t8h+T0w610nR5DgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 15000,
            dps: 4455.45,
            speed: 14,
            range: 600,
            rangeType: "単体",
            kbLevel: 5,
            money: 1500,
            freq: 101,
            foreswing: 14,
            backswing: 49,
            tba: 44
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 15000,
            actualDps: 4455.45,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2047Data;

