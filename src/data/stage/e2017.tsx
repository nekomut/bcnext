// Stage 2017 Data
import type { StageData } from '../../app/stage/types';

export const e2017Data: StageData = {
  eventId: 2017,
  eventName: "逆襲のメルクストーリア(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 17,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "臆した飛翔！アロイス",
      baseHp: 50000,
      width: 4000,
      enemyLimit: 4,
      requiredCost: 30,
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
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "100000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "50000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "3",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAgMaHCMdHCAbJTQnJzAdKkIdMDAkKjsmKzYhMEYlMTwbNlAyMDgaNl8qN0k8P0IeRXBAP0wjSXVaOjpBRUcnVlBKUUdMUVxUT1RVTlRgTUhaVmA5aF5xXE1vXFRwX2CAZlp8apBzdHWCc3CEdntuhHt2hISOgaGUgY+Og6mWkK2fm5itj82VsqGxpbCisKuWt6ijta+Xz7S7u7vBusOF4rWozr6L4bnR0NDW1tbi4OLi4uLx8fH+/v7///9DynRUAAAAQHRSTlMApRNcOSGJCOOp0U9z/f7C6OX///+guHkH/0lkHf2yl/7Shij+4w5Yy/+s5P//Pf9pUYmkmf/gwPf/zv/m/P8ASSfn0AAAAsdJREFUWIXtlet2ojAUhR0FuVQupliJlzGUWIqCWBQtRjrv/1ZzAq2t7SqGzr9Z7oUsBPaXnZMTbf35R7WugCvgCrgC/iNAjSZP6bZW6dqv8/vb4uWCisPqe7+bgr9grGAFnLkKBjcqKJxZebWvmcABnmdRlCc5y6KEX+WMJRlj4M1YkeQ5vHCsmcErgGXgj5KcA0BZnhcsywtgZDxKzRT28DzPsoK7Mv5hEIEDYC6ckmf1CVrB8VINIUBaA1CC/fGjSsPZneNhPakBwCz8D9rwwKl/pnr7uXhNj2u3geOT1sXLIVB+7oc1OQRNPe6HwMFxX9v3XzW5XyzuT0VS0m1D/+gxBj2+EdygScFBcumP48VPyz4OK8Cy4cAnzWIKiCSej37mb3scAPuNji++O/Efvt6UPZ4ftl+8uNg7bpA+fUGM5mUFsux9Hb7Xw2qz+YRoa+S1iPFSpAgP6/05QrIRphWCDtoCBHe12W1W74iugQimYA+xo8sCAAjxtD8hJiMLcQChFCOk3ggBAJHuOML3lZk3KBNgQrFh6JpYhLKYz7vt/SIY/wYAjO0QQhw0uBGNwIu5e57Pl95IHmCMMHEcB+OhsL3Fe+KRUgIAC4eUhthwKNZEVuEkf7Gk1Jt1TQQVjELHCbHZa/Q75gdz7/ecEIoICSN+YOFl4FLG45ncsRDEp0CBadAQWZJ4BnfmDXuqaUIFaRglESUYm6baFV1JmMLQMkvhCMYnGBmIf7Mk0Snc9G9Lv4GhCQj0kVERdMFCSP1bAMABRkxszSjF7whuCalf+XWVG7V2R30DWILt0Ov3eQjLhlY2Oq1Wp4rQ17tifiiCBGW4xVx8UIlHQLgrN+hHpafdTacY27xubc1Ahj0QXYQ3xHA6nVYrJ+uGaY+a/ikrkGDaKy8lyzb0huNDbku9G7wufLurdhrtx3JYW//1rgsB/gKKw8NmDIcLKQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 450,
            actualDps: 250.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "天涯の訪問者！コーネリア",
      baseHp: 50000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 60,
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
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "200000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "100000",
          amount: "11",
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
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "1",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3200,
            actualAp: 430,
            actualDps: 314.63,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "13.3-30.0s",
            delayFrames: "400-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3200,
            actualAp: 430,
            actualDps: 314.63,
            magnification: "100%",
            count: "4",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 9200,
            actualAp: 600,
            actualDps: 367.35,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "62.0-66.0s",
            delayFrames: "1,860-1,980f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 250,
            actualAp: 50,
            actualDps: 26.32,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "60.0-62.0s",
            delayFrames: "1,800-1,860f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 650,
            actualAp: 150,
            actualDps: 67.16,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "58.0-60.0s",
            delayFrames: "1,740-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3200,
            actualAp: 430,
            actualDps: 314.63,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "64.0-68.0s",
            delayFrames: "1,920-2,040f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 99999,
            actualAp: 900,
            actualDps: 177.63,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "夜明く銀の獣！ハルシュト",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 6,
      requiredCost: 90,
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
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "164",
          enemyName: "コーネリア",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 99999,
            actualAp: 900,
            actualDps: 177.63,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 99999,
            actualAp: 900,
            actualDps: 177.63,
            magnification: "100%",
            count: "3",
            spawnTime: "112.0s",
            spawnTimeFrames: "3,360f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "2",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "4",
            spawnTime: "77.3s",
            spawnTimeFrames: "2,320f",
            delay: "40.0-53.3s",
            delayFrames: "1,200-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAgMaHCMdHCAbJTQnJzAdKkIdMDAkKjsmKzYhMEYlMTwbNlAyMDgaNl8qN0k8P0IeRXBAP0wjSXVaOjpBRUcnVlBKUUdMUVxUT1RVTlRgTUhaVmA5aF5xXE1vXFRwX2CAZlp8apBzdHWCc3CEdntuhHt2hISOgaGUgY+Og6mWkK2fm5itj82VsqGxpbCisKuWt6ijta+Xz7S7u7vBusOF4rWozr6L4bnR0NDW1tbi4OLi4uLx8fH+/v7///9DynRUAAAAQHRSTlMApRNcOSGJCOOp0U9z/f7C6OX///+guHkH/0lkHf2yl/7Shij+4w5Yy/+s5P//Pf9pUYmkmf/gwPf/zv/m/P8ASSfn0AAAAsdJREFUWIXtlet2ojAUhR0FuVQupliJlzGUWIqCWBQtRjrv/1ZzAq2t7SqGzr9Z7oUsBPaXnZMTbf35R7WugCvgCrgC/iNAjSZP6bZW6dqv8/vb4uWCisPqe7+bgr9grGAFnLkKBjcqKJxZebWvmcABnmdRlCc5y6KEX+WMJRlj4M1YkeQ5vHCsmcErgGXgj5KcA0BZnhcsywtgZDxKzRT28DzPsoK7Mv5hEIEDYC6ckmf1CVrB8VINIUBaA1CC/fGjSsPZneNhPakBwCz8D9rwwKl/pnr7uXhNj2u3geOT1sXLIVB+7oc1OQRNPe6HwMFxX9v3XzW5XyzuT0VS0m1D/+gxBj2+EdygScFBcumP48VPyz4OK8Cy4cAnzWIKiCSej37mb3scAPuNji++O/Efvt6UPZ4ftl+8uNg7bpA+fUGM5mUFsux9Hb7Xw2qz+YRoa+S1iPFSpAgP6/05QrIRphWCDtoCBHe12W1W74iugQimYA+xo8sCAAjxtD8hJiMLcQChFCOk3ggBAJHuOML3lZk3KBNgQrFh6JpYhLKYz7vt/SIY/wYAjO0QQhw0uBGNwIu5e57Pl95IHmCMMHEcB+OhsL3Fe+KRUgIAC4eUhthwKNZEVuEkf7Gk1Jt1TQQVjELHCbHZa/Q75gdz7/ecEIoICSN+YOFl4FLG45ncsRDEp0CBadAQWZJ4BnfmDXuqaUIFaRglESUYm6baFV1JmMLQMkvhCMYnGBmIf7Mk0Snc9G9Lv4GhCQj0kVERdMFCSP1bAMABRkxszSjF7whuCalf+XWVG7V2R30DWILt0Ov3eQjLhlY2Oq1Wp4rQ17tifiiCBGW4xVx8UIlHQLgrN+hHpafdTacY27xubc1Ahj0QXYQ3xHA6nVYrJ+uGaY+a/ikrkGDaKy8lyzb0huNDbku9G7wufLurdhrtx3JYW//1rgsB/gKKw8NmDIcLKQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6300,
            actualDps: 3500.0,
            magnification: "1400%",
            count: "5",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAgMaHCMdHCAbJTQnJzAdKkIdMDAkKjsmKzYhMEYlMTwbNlAyMDgaNl8qN0k8P0IeRXBAP0wjSXVaOjpBRUcnVlBKUUdMUVxUT1RVTlRgTUhaVmA5aF5xXE1vXFRwX2CAZlp8apBzdHWCc3CEdntuhHt2hISOgaGUgY+Og6mWkK2fm5itj82VsqGxpbCisKuWt6ijta+Xz7S7u7vBusOF4rWozr6L4bnR0NDW1tbi4OLi4uLx8fH+/v7///9DynRUAAAAQHRSTlMApRNcOSGJCOOp0U9z/f7C6OX///+guHkH/0lkHf2yl/7Shij+4w5Yy/+s5P//Pf9pUYmkmf/gwPf/zv/m/P8ASSfn0AAAAsdJREFUWIXtlet2ojAUhR0FuVQupliJlzGUWIqCWBQtRjrv/1ZzAq2t7SqGzr9Z7oUsBPaXnZMTbf35R7WugCvgCrgC/iNAjSZP6bZW6dqv8/vb4uWCisPqe7+bgr9grGAFnLkKBjcqKJxZebWvmcABnmdRlCc5y6KEX+WMJRlj4M1YkeQ5vHCsmcErgGXgj5KcA0BZnhcsywtgZDxKzRT28DzPsoK7Mv5hEIEDYC6ckmf1CVrB8VINIUBaA1CC/fGjSsPZneNhPakBwCz8D9rwwKl/pnr7uXhNj2u3geOT1sXLIVB+7oc1OQRNPe6HwMFxX9v3XzW5XyzuT0VS0m1D/+gxBj2+EdygScFBcumP48VPyz4OK8Cy4cAnzWIKiCSej37mb3scAPuNji++O/Efvt6UPZ4ftl+8uNg7bpA+fUGM5mUFsux9Hb7Xw2qz+YRoa+S1iPFSpAgP6/05QrIRphWCDtoCBHe12W1W74iugQimYA+xo8sCAAjxtD8hJiMLcQChFCOk3ggBAJHuOML3lZk3KBNgQrFh6JpYhLKYz7vt/SIY/wYAjO0QQhw0uBGNwIu5e57Pl95IHmCMMHEcB+OhsL3Fe+KRUgIAC4eUhthwKNZEVuEkf7Gk1Jt1TQQVjELHCbHZa/Q75gdz7/ecEIoICSN+YOFl4FLG45ncsRDEp0CBadAQWZJ4BnfmDXuqaUIFaRglESUYm6baFV1JmMLQMkvhCMYnGBmIf7Mk0Snc9G9Lv4GhCQj0kVERdMFCSP1bAMABRkxszSjF7whuCalf+XWVG7V2R30DWILt0Ov3eQjLhlY2Oq1Wp4rQ17tifiiCBGW4xVx8UIlHQLgrN+hHpafdTacY27xubc1Ahj0QXYQ3xHA6nVYrJ+uGaY+a/ikrkGDaKy8lyzb0huNDbku9G7wufLurdhrtx3JYW//1rgsB/gKKw8NmDIcLKQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6300,
            actualDps: 3500.0,
            magnification: "1400%",
            count: "5",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAgMaHCMdHCAbJTQnJzAdKkIdMDAkKjsmKzYhMEYlMTwbNlAyMDgaNl8qN0k8P0IeRXBAP0wjSXVaOjpBRUcnVlBKUUdMUVxUT1RVTlRgTUhaVmA5aF5xXE1vXFRwX2CAZlp8apBzdHWCc3CEdntuhHt2hISOgaGUgY+Og6mWkK2fm5itj82VsqGxpbCisKuWt6ijta+Xz7S7u7vBusOF4rWozr6L4bnR0NDW1tbi4OLi4uLx8fH+/v7///9DynRUAAAAQHRSTlMApRNcOSGJCOOp0U9z/f7C6OX///+guHkH/0lkHf2yl/7Shij+4w5Yy/+s5P//Pf9pUYmkmf/gwPf/zv/m/P8ASSfn0AAAAsdJREFUWIXtlet2ojAUhR0FuVQupliJlzGUWIqCWBQtRjrv/1ZzAq2t7SqGzr9Z7oUsBPaXnZMTbf35R7WugCvgCrgC/iNAjSZP6bZW6dqv8/vb4uWCisPqe7+bgr9grGAFnLkKBjcqKJxZebWvmcABnmdRlCc5y6KEX+WMJRlj4M1YkeQ5vHCsmcErgGXgj5KcA0BZnhcsywtgZDxKzRT28DzPsoK7Mv5hEIEDYC6ckmf1CVrB8VINIUBaA1CC/fGjSsPZneNhPakBwCz8D9rwwKl/pnr7uXhNj2u3geOT1sXLIVB+7oc1OQRNPe6HwMFxX9v3XzW5XyzuT0VS0m1D/+gxBj2+EdygScFBcumP48VPyz4OK8Cy4cAnzWIKiCSej37mb3scAPuNji++O/Efvt6UPZ4ftl+8uNg7bpA+fUGM5mUFsux9Hb7Xw2qz+YRoa+S1iPFSpAgP6/05QrIRphWCDtoCBHe12W1W74iugQimYA+xo8sCAAjxtD8hJiMLcQChFCOk3ggBAJHuOML3lZk3KBNgQrFh6JpYhLKYz7vt/SIY/wYAjO0QQhw0uBGNwIu5e57Pl95IHmCMMHEcB+OhsL3Fe+KRUgIAC4eUhthwKNZEVuEkf7Gk1Jt1TQQVjELHCbHZa/Q75gdz7/ecEIoICSN+YOFl4FLG45ncsRDEp0CBadAQWZJ4BnfmDXuqaUIFaRglESUYm6baFV1JmMLQMkvhCMYnGBmIf7Mk0Snc9G9Lv4GhCQj0kVERdMFCSP1bAMABRkxszSjF7whuCalf+XWVG7V2R30DWILt0Ov3eQjLhlY2Oq1Wp4rQ17tifiiCBGW4xVx8UIlHQLgrN+hHpafdTacY27xubc1Ahj0QXYQ3xHA6nVYrJ+uGaY+a/ikrkGDaKy8lyzb0huNDbku9G7wufLurdhrtx3JYW//1rgsB/gKKw8NmDIcLKQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 6300,
            actualDps: 3500.0,
            magnification: "1400%",
            count: "0",
            spawnTime: "118.7s",
            spawnTimeFrames: "3,560f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "81.3s",
            spawnTimeFrames: "2,440f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "critical": {
                chance: 40
            }
          }
        }]
    }
  ]
} as const;

export default e2017Data;

