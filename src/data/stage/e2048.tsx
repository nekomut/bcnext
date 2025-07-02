// Stage 2048 Data
import type { StageData } from '../../app/stage/types';

export const e2048Data: StageData = {
  eventId: 2048,
  eventName: "神秘のメルクストーリア(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 48,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "翼を与えられし者",
      baseHp: 15000,
      width: 4200,
      enemyLimit: 5,
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwILCwseGh4lJCcmJSZEPkhGQUJEQ0VQR0ZQTlBgXFxdXWReYmBkY2ssZcxkZWlta2hwbXVybm5ycXl3cXB6enp/fICAfH6DgYCNhomJiY2LiJN9j5WEjZZRpbqUkJpLrM6Tl52cnKWjopmiorGopKamqKGnp6err6gB//+3sbS5t6rDu7O8vrzAv8KVzv6lz/3MyMGr0ffNzc2y2P3Y1cq/3v7Z2dni4eHk5OTV6f3s6eby8vH9/f3///+xFqjTAAAAQHRSTlMAUSx7/w0J05n+JWhMDP7/OCCTrM/lLvxvUdOK6jMIe/75xN5W/uttmL8B/ofltv4JWs0+/yLeZv//653//v8AeQfVJQAABCFJREFUWIXtVm13ojoQdrtKV0QvL1ZAoUUgvNwI6dKUJjZh//+/2onHnu36ine/3bPPUZQh82QyyTzD4McfYvCX4C/B/4TgAFqYF/2RWkf+m63sjnDCtH/QhAcE6VaZpYRvJ4T6t7+RnO9opBAc7Oq7u29+9x/VykgIo5hwijijhDImEGY0iqgQjGBEIyQ4omoEjBUnCASVglAYgYWUQNZJTCmJXELBzAiNCMHqQ6mK6GAJG2WjlDPOIEzJKIWP4ECAMacdhCS4CgpDkEDdddsDgkV7Ll9nsrg53Iaw3p7ALl8n7O1mekgwmFqLI3hC5ds/fmBpR/6noEFmZL3oNfYkIDGyPjpzFyZ8Bnw+47mUJ9Z6Ds8v33d4eX3eW6bNNr/B//39VUXw+vb+ujf5TTrq7T/48fL29gL4/vb2EcHE7z8/wErzvC7t8PHfD8sN08Ngw8n4VgqaFOFjXyfN2oU40tVlUkIdw8ETrC18faDvpp8uLi5i6m9SGKCXcDUTKHQGStAxWfl6WpqDwWO6ubILj2lZ56G22uZmTEXHuWBw7WSetoUWbhrFfGHV2tSyvIq3Gz/JnAwqGQClD8XetJW/2fLKs6ypdjaVZtm0bQsesk1YhTAVQMBBBiAPJGkhnwSeN6VxNoVp3VSgVqA+lCOXQAZoByGAJAoQL9BAwaqmvrQKTZ84GaEcXFEEvwJxISAQzhCIG8jj0jb0Szm8W5WV8gO95YEL+okQ7wjFIGMcTIxU5eoiAWyzl2GMGSi4M0fEnbkgva6LiFAZwJl3VTf0OAsgXJCdTY6jaL0G9V5HAVdtgARZfHl+gBGvJhVTB7Be5HMQbEgdzRJ1HgW1vXhyjWA0GhVNhqk6PIOR1zDoPu0SAgD5rmpr1KOctIWZwBGQXWPqhuO6wcoooYExknlFTzHTl4TAXpAgyfBsNnsICLQPTGK9n/BC4PESIQSbgTlzIzeCv3C/TPx+/iAEuoeiCCg4QS6GM4nUrW1cTeAveMkc5qQYRS4Wano0T1b93WEzJ3YwDwgchEiFEc0D2zhbQsew0iKOPWP+AI7qfcDN7BXo2rSfsI1Mr6gL23Hmzv0YKotQEtj334okXuWX5eyDQA/DqaZNAmcyR7ADEUaZf+/GzhLjsu8+qNZeWNMyQPASMhsr74eH2T/r9VNo9WsMiwK0M8wQAV0YDqM29R1XEazX5SaFhVwtSS/UBpqNCJE8AgJWrVZ2gtbx01Oep75xd60iRmoGM1AvX2g8HI6RSHzdr8sbGjOQOBEiUrpDwEywQhuAIPfuUIrABkmTAmphPHY5w94NvnuGOYKWgOD1kCDKlubNBBo0V5JlklTFJKluKKRPMVjGN1eUpjYyzJsa+yd8maPbF/8bvg6//hnB3f0NZXya4b973n35hbs+PD8B0A6fJ+oWlkcAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 400,
            actualDps: 179.1,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "聖翼と呼ばれた少女",
      baseHp: 30000,
      width: 3800,
      enemyLimit: 6,
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
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "2",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "75000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "348",
          enemyName: "オルトス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwILCwseGh4lJCcmJSZEPkhGQUJEQ0VQR0ZQTlBgXFxdXWReYmBkY2ssZcxkZWlta2hwbXVybm5ycXl3cXB6enp/fICAfH6DgYCNhomJiY2LiJN9j5WEjZZRpbqUkJpLrM6Tl52cnKWjopmiorGopKamqKGnp6err6gB//+3sbS5t6rDu7O8vrzAv8KVzv6lz/3MyMGr0ffNzc2y2P3Y1cq/3v7Z2dni4eHk5OTV6f3s6eby8vH9/f3///+xFqjTAAAAQHRSTlMAUSx7/w0J05n+JWhMDP7/OCCTrM/lLvxvUdOK6jMIe/75xN5W/uttmL8B/ofltv4JWs0+/yLeZv//653//v8AeQfVJQAABCFJREFUWIXtVm13ojoQdrtKV0QvL1ZAoUUgvNwI6dKUJjZh//+/2onHnu36ine/3bPPUZQh82QyyTzD4McfYvCX4C/B/4TgAFqYF/2RWkf+m63sjnDCtH/QhAcE6VaZpYRvJ4T6t7+RnO9opBAc7Oq7u29+9x/VykgIo5hwijijhDImEGY0iqgQjGBEIyQ4omoEjBUnCASVglAYgYWUQNZJTCmJXELBzAiNCMHqQ6mK6GAJG2WjlDPOIEzJKIWP4ECAMacdhCS4CgpDkEDdddsDgkV7Ll9nsrg53Iaw3p7ALl8n7O1mekgwmFqLI3hC5ds/fmBpR/6noEFmZL3oNfYkIDGyPjpzFyZ8Bnw+47mUJ9Z6Ds8v33d4eX3eW6bNNr/B//39VUXw+vb+ujf5TTrq7T/48fL29gL4/vb2EcHE7z8/wErzvC7t8PHfD8sN08Ngw8n4VgqaFOFjXyfN2oU40tVlUkIdw8ETrC18faDvpp8uLi5i6m9SGKCXcDUTKHQGStAxWfl6WpqDwWO6ubILj2lZ56G22uZmTEXHuWBw7WSetoUWbhrFfGHV2tSyvIq3Gz/JnAwqGQClD8XetJW/2fLKs6ypdjaVZtm0bQsesk1YhTAVQMBBBiAPJGkhnwSeN6VxNoVp3VSgVqA+lCOXQAZoByGAJAoQL9BAwaqmvrQKTZ84GaEcXFEEvwJxISAQzhCIG8jj0jb0Szm8W5WV8gO95YEL+okQ7wjFIGMcTIxU5eoiAWyzl2GMGSi4M0fEnbkgva6LiFAZwJl3VTf0OAsgXJCdTY6jaL0G9V5HAVdtgARZfHl+gBGvJhVTB7Be5HMQbEgdzRJ1HgW1vXhyjWA0GhVNhqk6PIOR1zDoPu0SAgD5rmpr1KOctIWZwBGQXWPqhuO6wcoooYExknlFTzHTl4TAXpAgyfBsNnsICLQPTGK9n/BC4PESIQSbgTlzIzeCv3C/TPx+/iAEuoeiCCg4QS6GM4nUrW1cTeAveMkc5qQYRS4Wano0T1b93WEzJ3YwDwgchEiFEc0D2zhbQsew0iKOPWP+AI7qfcDN7BXo2rSfsI1Mr6gL23Hmzv0YKotQEtj334okXuWX5eyDQA/DqaZNAmcyR7ADEUaZf+/GzhLjsu8+qNZeWNMyQPASMhsr74eH2T/r9VNo9WsMiwK0M8wQAV0YDqM29R1XEazX5SaFhVwtSS/UBpqNCJE8AgJWrVZ2gtbx01Oep75xd60iRmoGM1AvX2g8HI6RSHzdr8sbGjOQOBEiUrpDwEywQhuAIPfuUIrABkmTAmphPHY5w94NvnuGOYKWgOD1kCDKlubNBBo0V5JlklTFJKluKKRPMVjGN1eUpjYyzJsa+yd8maPbF/8bvg6//hnB3f0NZXya4b973n35hbs+PD8B0A6fJ+oWlkcAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 400,
            actualDps: 179.1,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 30000,
            actualAp: 1942,
            actualDps: 924.76,
            magnification: "100%",
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
          enemyId: "348",
          enemyName: "オルトス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwILCwseGh4lJCcmJSZEPkhGQUJEQ0VQR0ZQTlBgXFxdXWReYmBkY2ssZcxkZWlta2hwbXVybm5ycXl3cXB6enp/fICAfH6DgYCNhomJiY2LiJN9j5WEjZZRpbqUkJpLrM6Tl52cnKWjopmiorGopKamqKGnp6err6gB//+3sbS5t6rDu7O8vrzAv8KVzv6lz/3MyMGr0ffNzc2y2P3Y1cq/3v7Z2dni4eHk5OTV6f3s6eby8vH9/f3///+xFqjTAAAAQHRSTlMAUSx7/w0J05n+JWhMDP7/OCCTrM/lLvxvUdOK6jMIe/75xN5W/uttmL8B/ofltv4JWs0+/yLeZv//653//v8AeQfVJQAABCFJREFUWIXtVm13ojoQdrtKV0QvL1ZAoUUgvNwI6dKUJjZh//+/2onHnu36ine/3bPPUZQh82QyyTzD4McfYvCX4C/B/4TgAFqYF/2RWkf+m63sjnDCtH/QhAcE6VaZpYRvJ4T6t7+RnO9opBAc7Oq7u29+9x/VykgIo5hwijijhDImEGY0iqgQjGBEIyQ4omoEjBUnCASVglAYgYWUQNZJTCmJXELBzAiNCMHqQ6mK6GAJG2WjlDPOIEzJKIWP4ECAMacdhCS4CgpDkEDdddsDgkV7Ll9nsrg53Iaw3p7ALl8n7O1mekgwmFqLI3hC5ds/fmBpR/6noEFmZL3oNfYkIDGyPjpzFyZ8Bnw+47mUJ9Z6Ds8v33d4eX3eW6bNNr/B//39VUXw+vb+ujf5TTrq7T/48fL29gL4/vb2EcHE7z8/wErzvC7t8PHfD8sN08Ngw8n4VgqaFOFjXyfN2oU40tVlUkIdw8ETrC18faDvpp8uLi5i6m9SGKCXcDUTKHQGStAxWfl6WpqDwWO6ubILj2lZ56G22uZmTEXHuWBw7WSetoUWbhrFfGHV2tSyvIq3Gz/JnAwqGQClD8XetJW/2fLKs6ypdjaVZtm0bQsesk1YhTAVQMBBBiAPJGkhnwSeN6VxNoVp3VSgVqA+lCOXQAZoByGAJAoQL9BAwaqmvrQKTZ84GaEcXFEEvwJxISAQzhCIG8jj0jb0Szm8W5WV8gO95YEL+okQ7wjFIGMcTIxU5eoiAWyzl2GMGSi4M0fEnbkgva6LiFAZwJl3VTf0OAsgXJCdTY6jaL0G9V5HAVdtgARZfHl+gBGvJhVTB7Be5HMQbEgdzRJ1HgW1vXhyjWA0GhVNhqk6PIOR1zDoPu0SAgD5rmpr1KOctIWZwBGQXWPqhuO6wcoooYExknlFTzHTl4TAXpAgyfBsNnsICLQPTGK9n/BC4PESIQSbgTlzIzeCv3C/TPx+/iAEuoeiCCg4QS6GM4nUrW1cTeAveMkc5qQYRS4Wano0T1b93WEzJ3YwDwgchEiFEc0D2zhbQsew0iKOPWP+AI7qfcDN7BXo2rSfsI1Mr6gL23Hmzv0YKotQEtj334okXuWX5eyDQA/DqaZNAmcyR7ADEUaZf+/GzhLjsu8+qNZeWNMyQPASMhsr74eH2T/r9VNo9WsMiwK0M8wQAV0YDqM29R1XEazX5SaFhVwtSS/UBpqNCJE8AgJWrVZ2gtbx01Oep75xd60iRmoGM1AvX2g8HI6RSHzdr8sbGjOQOBEiUrpDwEywQhuAIPfuUIrABkmTAmphPHY5w94NvnuGOYKWgOD1kCDKlubNBBo0V5JlklTFJKluKKRPMVjGN1eUpjYyzJsa+yd8maPbF/8bvg6//hnB3f0NZXya4b973n35hbs+PD8B0A6fJ+oWlkcAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 400,
            actualDps: 179.1,
            magnification: "100%",
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
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "349",
          enemyName: "ミシェリア",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAABLR0X/AACJQwJlXl5iYGCBXFiNdHOBfHiJgHqMiIWohVechYP/dAOYmJiklZTCm13+jR6roZamo6H+jyH+jyH/kSWvoqH/kianp6b/lSz+ly7/mSy2rKvLq3r/nzu5rqrJrYb/qRO4uLi/ubnBubn+rVfGu7P/sVrnuYHJxMH/vG3cxaPdx6bix6riy67Tzs7czb7n1r/g2tfv3cv//wH34s7p5+X07un17+b79O3++vb+/v7////anRPmAAAAQHRSTlMALEsPAQlGJP3/LrJJC/0DY/8OE3WIYoIu/keYWW4X/yeP0lwEqf/oZ7eti/7NQ2fpkv/Gsf/bAfz//vH///8Ar2iQywAABGZJREFUWIXtVm176igQ5W7aaqxGSXwjvhBri1VpjSg2IZD7///VHWK9e3fr80i6X3ceTQLhnBwGmBn08z8a+p/gJ0Ko0RtMvmeDtgf49kGZs5VlWV3s1fzr6bP9286IYt1CjYNtaVPq0pz7zzBtzugLgaqufxPoEhCleUE9VRpOCRNEUC4oE7I0jAlORQ43xrgQQmoh4ZIrCahcCSMEgeEEmgUawBcoxkRSQZUdLkvJpWScMy4xY1QYJRQ0uJBMlJLBN5RghOaMgCCF+iAEvsc4AQAQSC7sWCm5ZYNHJgTLbTuX0AJdgkkQR3POSqugdQJZMGOljIZfruDB5LmWcFOVB5S2/siVsa+tu8BbJtf2V5YH5PVO//RvHdOHNkJea/Byw1I7+HTlRb+Fftv9/T36YudOO0tzaH19/adFi832NR5H3UvH83wcv2430w+EBrrU6xt49Dx9SxfD2Wwaj+fdbjSO4Xm2STfjO7vV1EvjBh6h7vx1MRxH0Xg4mo1GsX2aLabzO9jrRTG5ja8o4tkwjof2P43j2SyOAI68l6LvueBhGlE8Go2sDHufjSs8aj313PDR+BW+2Y2mi9FiFEfRfDqL5+DThwcn/N18u4nH4LvhdBzN7Q1as81r5CbeLuPbBtZgHD17XuOh4XXtOize3uwyOll3Po+iZ3BZe/K0Wq3W/Qb66EbQ6arg0xqDVIpc6zw/3to5V82bSDiIsPHz/ObevWo9kX/GQmnM3nH1/7DGk7yEvtyUp/oSWmkVJOzfRqtebYI2V9YBSkMcgrDTr0/AtI1oQlVeNMtvKNAqF5oKrWEti3ZtggcCgZdAluAQtoVDDPiiAPt+0PQDiO2B33yojUftgAUUMkemJcXfIVhCboL8JpVWkq5qb4NOMqEK8hKkRMhDJG2H9fDh7gRJELC4GRAfMmB6fO+4Hmaw5Ag5S0ES5hg3m80AZJhi5y7C4mH7SQFJnhGfwDLCeSp2HVf9Fd4YIGCQ9zE9E5ji3XESu8J8EnBOA5gDpjK3HQe3SYR7cyGgnPiB70PFYQl0kTgRdI4XAhYEGEoNxnxeKSje3QgOFwLKMMyeYYJZpUDv6ikQTR9LKLlgIYKq+nMkuK98AKWMgB0AFZsg1G/WUYB2ANZgsA0JlGAEByTIbYejD9B7oStjlIIbbHmIsaxDkBSVAEVgBSimmIAIXovgVBFkxFaMfoADKDFJHYLweCawhS33mxBWOMeZVs4Enb2dgLIEUpAgsFUqg9iqT4kbAXhRWQJAwW4moMCWuUrpo+uBTk42JWTb9XrFKbW+XD3xTKn9lerxqoWWIJODVqc1ICzw8WN/mVqCO2cFgE/TAYTicM3xY3sZhlvoc57CrlBZtl3a4Z02CR46oT0hmXJ1YngE/Ck5BzBv8nguDXZZlrkt490yS2W2vwRAz7vMK03d5pAcDv30q9rO9rg8uEjobPdJcrgSgZNt+L51kNBJQpQsr0XwMPwIHSP7x+e4H3+d7YcbDP0CJzldqij0ECAAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 2000,
            actualDps: 197.37,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "鬼鎮めの儀式",
      baseHp: 150000,
      width: 4200,
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            actualHp: 19200,
            actualAp: 2580,
            actualDps: 1887.78,
            magnification: "600%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwILCwseGh4lJCcmJSZEPkhGQUJEQ0VQR0ZQTlBgXFxdXWReYmBkY2ssZcxkZWlta2hwbXVybm5ycXl3cXB6enp/fICAfH6DgYCNhomJiY2LiJN9j5WEjZZRpbqUkJpLrM6Tl52cnKWjopmiorGopKamqKGnp6err6gB//+3sbS5t6rDu7O8vrzAv8KVzv6lz/3MyMGr0ffNzc2y2P3Y1cq/3v7Z2dni4eHk5OTV6f3s6eby8vH9/f3///+xFqjTAAAAQHRSTlMAUSx7/w0J05n+JWhMDP7/OCCTrM/lLvxvUdOK6jMIe/75xN5W/uttmL8B/ofltv4JWs0+/yLeZv//653//v8AeQfVJQAABCFJREFUWIXtVm13ojoQdrtKV0QvL1ZAoUUgvNwI6dKUJjZh//+/2onHnu36ine/3bPPUZQh82QyyTzD4McfYvCX4C/B/4TgAFqYF/2RWkf+m63sjnDCtH/QhAcE6VaZpYRvJ4T6t7+RnO9opBAc7Oq7u29+9x/VykgIo5hwijijhDImEGY0iqgQjGBEIyQ4omoEjBUnCASVglAYgYWUQNZJTCmJXELBzAiNCMHqQ6mK6GAJG2WjlDPOIEzJKIWP4ECAMacdhCS4CgpDkEDdddsDgkV7Ll9nsrg53Iaw3p7ALl8n7O1mekgwmFqLI3hC5ds/fmBpR/6noEFmZL3oNfYkIDGyPjpzFyZ8Bnw+47mUJ9Z6Ds8v33d4eX3eW6bNNr/B//39VUXw+vb+ujf5TTrq7T/48fL29gL4/vb2EcHE7z8/wErzvC7t8PHfD8sN08Ngw8n4VgqaFOFjXyfN2oU40tVlUkIdw8ETrC18faDvpp8uLi5i6m9SGKCXcDUTKHQGStAxWfl6WpqDwWO6ubILj2lZ56G22uZmTEXHuWBw7WSetoUWbhrFfGHV2tSyvIq3Gz/JnAwqGQClD8XetJW/2fLKs6ypdjaVZtm0bQsesk1YhTAVQMBBBiAPJGkhnwSeN6VxNoVp3VSgVqA+lCOXQAZoByGAJAoQL9BAwaqmvrQKTZ84GaEcXFEEvwJxISAQzhCIG8jj0jb0Szm8W5WV8gO95YEL+okQ7wjFIGMcTIxU5eoiAWyzl2GMGSi4M0fEnbkgva6LiFAZwJl3VTf0OAsgXJCdTY6jaL0G9V5HAVdtgARZfHl+gBGvJhVTB7Be5HMQbEgdzRJ1HgW1vXhyjWA0GhVNhqk6PIOR1zDoPu0SAgD5rmpr1KOctIWZwBGQXWPqhuO6wcoooYExknlFTzHTl4TAXpAgyfBsNnsICLQPTGK9n/BC4PESIQSbgTlzIzeCv3C/TPx+/iAEuoeiCCg4QS6GM4nUrW1cTeAveMkc5qQYRS4Wano0T1b93WEzJ3YwDwgchEiFEc0D2zhbQsew0iKOPWP+AI7qfcDN7BXo2rSfsI1Mr6gL23Hmzv0YKotQEtj334okXuWX5eyDQA/DqaZNAmcyR7ADEUaZf+/GzhLjsu8+qNZeWNMyQPASMhsr74eH2T/r9VNo9WsMiwK0M8wQAV0YDqM29R1XEazX5SaFhVwtSS/UBpqNCJE8AgJWrVZ2gtbx01Oep75xd60iRmoGM1AvX2g8HI6RSHzdr8sbGjOQOBEiUrpDwEywQhuAIPfuUIrABkmTAmphPHY5w94NvnuGOYKWgOD1kCDKlubNBBo0V5JlklTFJKluKKRPMVjGN1eUpjYyzJsa+yd8maPbF/8bvg6//hnB3f0NZXya4b973n35hbs+PD8B0A6fJ+oWlkcAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 2400,
            actualDps: 1074.6,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "348",
          enemyName: "オルトス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwILCwseGh4lJCcmJSZEPkhGQUJEQ0VQR0ZQTlBgXFxdXWReYmBkY2ssZcxkZWlta2hwbXVybm5ycXl3cXB6enp/fICAfH6DgYCNhomJiY2LiJN9j5WEjZZRpbqUkJpLrM6Tl52cnKWjopmiorGopKamqKGnp6err6gB//+3sbS5t6rDu7O8vrzAv8KVzv6lz/3MyMGr0ffNzc2y2P3Y1cq/3v7Z2dni4eHk5OTV6f3s6eby8vH9/f3///+xFqjTAAAAQHRSTlMAUSx7/w0J05n+JWhMDP7/OCCTrM/lLvxvUdOK6jMIe/75xN5W/uttmL8B/ofltv4JWs0+/yLeZv//653//v8AeQfVJQAABCFJREFUWIXtVm13ojoQdrtKV0QvL1ZAoUUgvNwI6dKUJjZh//+/2onHnu36ine/3bPPUZQh82QyyTzD4McfYvCX4C/B/4TgAFqYF/2RWkf+m63sjnDCtH/QhAcE6VaZpYRvJ4T6t7+RnO9opBAc7Oq7u29+9x/VykgIo5hwijijhDImEGY0iqgQjGBEIyQ4omoEjBUnCASVglAYgYWUQNZJTCmJXELBzAiNCMHqQ6mK6GAJG2WjlDPOIEzJKIWP4ECAMacdhCS4CgpDkEDdddsDgkV7Ll9nsrg53Iaw3p7ALl8n7O1mekgwmFqLI3hC5ds/fmBpR/6noEFmZL3oNfYkIDGyPjpzFyZ8Bnw+47mUJ9Z6Ds8v33d4eX3eW6bNNr/B//39VUXw+vb+ujf5TTrq7T/48fL29gL4/vb2EcHE7z8/wErzvC7t8PHfD8sN08Ngw8n4VgqaFOFjXyfN2oU40tVlUkIdw8ETrC18faDvpp8uLi5i6m9SGKCXcDUTKHQGStAxWfl6WpqDwWO6ubILj2lZ56G22uZmTEXHuWBw7WSetoUWbhrFfGHV2tSyvIq3Gz/JnAwqGQClD8XetJW/2fLKs6ypdjaVZtm0bQsesk1YhTAVQMBBBiAPJGkhnwSeN6VxNoVp3VSgVqA+lCOXQAZoByGAJAoQL9BAwaqmvrQKTZ84GaEcXFEEvwJxISAQzhCIG8jj0jb0Szm8W5WV8gO95YEL+okQ7wjFIGMcTIxU5eoiAWyzl2GMGSi4M0fEnbkgva6LiFAZwJl3VTf0OAsgXJCdTY6jaL0G9V5HAVdtgARZfHl+gBGvJhVTB7Be5HMQbEgdzRJ1HgW1vXhyjWA0GhVNhqk6PIOR1zDoPu0SAgD5rmpr1KOctIWZwBGQXWPqhuO6wcoooYExknlFTzHTl4TAXpAgyfBsNnsICLQPTGK9n/BC4PESIQSbgTlzIzeCv3C/TPx+/iAEuoeiCCg4QS6GM4nUrW1cTeAveMkc5qQYRS4Wano0T1b93WEzJ3YwDwgchEiFEc0D2zhbQsew0iKOPWP+AI7qfcDN7BXo2rSfsI1Mr6gL23Hmzv0YKotQEtj334okXuWX5eyDQA/DqaZNAmcyR7ADEUaZf+/GzhLjsu8+qNZeWNMyQPASMhsr74eH2T/r9VNo9WsMiwK0M8wQAV0YDqM29R1XEazX5SaFhVwtSS/UBpqNCJE8AgJWrVZ2gtbx01Oep75xd60iRmoGM1AvX2g8HI6RSHzdr8sbGjOQOBEiUrpDwEywQhuAIPfuUIrABkmTAmphPHY5w94NvnuGOYKWgOD1kCDKlubNBBo0V5JlklTFJKluKKRPMVjGN1eUpjYyzJsa+yd8maPbF/8bvg6//hnB3f0NZXya4b973n35hbs+PD8B0A6fJ+oWlkcAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 4800,
            ap: 400,
            dps: 179.1,
            speed: 16,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 67,
            foreswing: 16,
            backswing: 25,
            tba: 26
          },
          stageStats: {
            actualHp: 28800,
            actualAp: 2400,
            actualDps: 1074.6,
            magnification: "600%",
            count: "8",
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
          enemyId: "349",
          enemyName: "ミシェリア",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAABLR0X/AACJQwJlXl5iYGCBXFiNdHOBfHiJgHqMiIWohVechYP/dAOYmJiklZTCm13+jR6roZamo6H+jyH+jyH/kSWvoqH/kianp6b/lSz+ly7/mSy2rKvLq3r/nzu5rqrJrYb/qRO4uLi/ubnBubn+rVfGu7P/sVrnuYHJxMH/vG3cxaPdx6bix6riy67Tzs7czb7n1r/g2tfv3cv//wH34s7p5+X07un17+b79O3++vb+/v7////anRPmAAAAQHRSTlMALEsPAQlGJP3/LrJJC/0DY/8OE3WIYoIu/keYWW4X/yeP0lwEqf/oZ7eti/7NQ2fpkv/Gsf/bAfz//vH///8Ar2iQywAABGZJREFUWIXtVm176igQ5W7aaqxGSXwjvhBri1VpjSg2IZD7///VHWK9e3fr80i6X3ceTQLhnBwGmBn08z8a+p/gJ0Ko0RtMvmeDtgf49kGZs5VlWV3s1fzr6bP9286IYt1CjYNtaVPq0pz7zzBtzugLgaqufxPoEhCleUE9VRpOCRNEUC4oE7I0jAlORQ43xrgQQmoh4ZIrCahcCSMEgeEEmgUawBcoxkRSQZUdLkvJpWScMy4xY1QYJRQ0uJBMlJLBN5RghOaMgCCF+iAEvsc4AQAQSC7sWCm5ZYNHJgTLbTuX0AJdgkkQR3POSqugdQJZMGOljIZfruDB5LmWcFOVB5S2/siVsa+tu8BbJtf2V5YH5PVO//RvHdOHNkJea/Byw1I7+HTlRb+Fftv9/T36YudOO0tzaH19/adFi832NR5H3UvH83wcv2430w+EBrrU6xt49Dx9SxfD2Wwaj+fdbjSO4Xm2STfjO7vV1EvjBh6h7vx1MRxH0Xg4mo1GsX2aLabzO9jrRTG5ja8o4tkwjof2P43j2SyOAI68l6LvueBhGlE8Go2sDHufjSs8aj313PDR+BW+2Y2mi9FiFEfRfDqL5+DThwcn/N18u4nH4LvhdBzN7Q1as81r5CbeLuPbBtZgHD17XuOh4XXtOize3uwyOll3Po+iZ3BZe/K0Wq3W/Qb66EbQ6arg0xqDVIpc6zw/3to5V82bSDiIsPHz/ObevWo9kX/GQmnM3nH1/7DGk7yEvtyUp/oSWmkVJOzfRqtebYI2V9YBSkMcgrDTr0/AtI1oQlVeNMtvKNAqF5oKrWEti3ZtggcCgZdAluAQtoVDDPiiAPt+0PQDiO2B33yojUftgAUUMkemJcXfIVhCboL8JpVWkq5qb4NOMqEK8hKkRMhDJG2H9fDh7gRJELC4GRAfMmB6fO+4Hmaw5Ag5S0ES5hg3m80AZJhi5y7C4mH7SQFJnhGfwDLCeSp2HVf9Fd4YIGCQ9zE9E5ji3XESu8J8EnBOA5gDpjK3HQe3SYR7cyGgnPiB70PFYQl0kTgRdI4XAhYEGEoNxnxeKSje3QgOFwLKMMyeYYJZpUDv6ikQTR9LKLlgIYKq+nMkuK98AKWMgB0AFZsg1G/WUYB2ANZgsA0JlGAEByTIbYejD9B7oStjlIIbbHmIsaxDkBSVAEVgBSimmIAIXovgVBFkxFaMfoADKDFJHYLweCawhS33mxBWOMeZVs4Enb2dgLIEUpAgsFUqg9iqT4kbAXhRWQJAwW4moMCWuUrpo+uBTk42JWTb9XrFKbW+XD3xTKn9lerxqoWWIJODVqc1ICzw8WN/mVqCO2cFgE/TAYTicM3xY3sZhlvoc57CrlBZtl3a4Z02CR46oT0hmXJ1YngE/Ck5BzBv8nguDXZZlrkt490yS2W2vwRAz7vMK03d5pAcDv30q9rO9rg8uEjobPdJcrgSgZNt+L51kNBJQpQsr0XwMPwIHSP7x+e4H3+d7YcbDP0CJzldqij0ECAAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2000,
            dps: 197.37,
            speed: 8,
            range: 440,
            rangeType: "範囲",
            kbLevel: 4,
            money: 750,
            freq: 304,
            foreswing: 29,
            backswing: 37,
            tba: 138
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 6000,
            actualDps: 592.11,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "350",
          enemyName: "とどめき",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 8000,
            dps: 2242.99,
            speed: 11,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1250,
            freq: 107,
            foreswing: 22,
            backswing: 45,
            tba: 43
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 8000,
            actualDps: 2242.99,
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
            "slow": {
                chance: 50,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    }
  ]
} as const;

export default e2048Data;

