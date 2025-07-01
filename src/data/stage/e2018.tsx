// Stage 2018 Data
import type { StageData } from '../../app/stage/types';

export const e2018Data: StageData = {
  eventId: 2018,
  eventName: "開眼の癒術士襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 18,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "癒術士進化への道 激ムズ",
      baseHp: 450000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10120",
          treasureName: "ニャイバーン＆アレクへの進化権(ワイバーンの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 19200,
            actualAp: 1920,
            actualDps: 647.2,
            magnification: "800%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            actualHp: 2000,
            actualAp: 400,
            actualDps: 210.56,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
            actualHp: 120000,
            actualAp: 7768,
            actualDps: 3699.04,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-26.7s",
            delayFrames: "500-800f",
            baseHpRatio: "90%",
            isBoss: false
          }
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "90%",
            isBoss: false
          }
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "90%",
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
            actualHp: 30400,
            actualAp: 6240,
            actualDps: 1407.52,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "90%",
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
            actualHp: 30400,
            actualAp: 6240,
            actualDps: 1407.52,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "90%",
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
            actualHp: 30400,
            actualAp: 6240,
            actualDps: 1407.52,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "166",
          enemyName: "にゃんこ化癒術士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1255500,
            ap: 8850,
            dps: 3360.76,
            speed: 23,
            range: 330,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 79,
            foreswing: 20,
            backswing: 26,
            tba: 30
          },
          stageStats: {
            actualHp: 1255500,
            actualAp: 8850,
            actualDps: 3360.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "癒術士進化への道 超激ムズ",
      baseHp: 930000,
      width: 4600,
      enemyLimit: 7,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10120",
          treasureName: "ニャイバーン＆アレクへの進化権(ワイバーンの第3形態)",
          probability: "100",
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
            actualHp: 2600,
            actualAp: 600,
            actualDps: 268.64,
            magnification: "400%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2600,
            actualAp: 600,
            actualDps: 268.64,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-23.3s",
            delayFrames: "300-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "095",
          enemyName: "アウラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 231000,
            actualAp: 10665,
            actualDps: 2882.43,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 73600,
            actualAp: 4800,
            actualDps: 2938.8,
            magnification: "800%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 73600,
            actualAp: 4800,
            actualDps: 2938.8,
            magnification: "800%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 199998,
            actualAp: 1800,
            actualDps: 355.26,
            magnification: "200%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: false
          }
        },
        {
          enemyId: "095",
          enemyName: "アウラ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 77000,
            ap: 3555,
            dps: 960.81,
            speed: 3,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 111,
            foreswing: 46,
            backswing: 65,
            tba: 30
          },
          stageStats: {
            actualHp: 231000,
            actualAp: 10665,
            actualDps: 2882.43,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: false
          }
        },
        {
          enemyId: "166",
          enemyName: "にゃんこ化癒術士",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1255500,
            ap: 8850,
            dps: 3360.76,
            speed: 23,
            range: 330,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 79,
            foreswing: 20,
            backswing: 26,
            tba: 30
          },
          stageStats: {
            actualHp: 1883250,
            actualAp: 13275,
            actualDps: 5041.14,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: false
          }
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
            actualHp: 73600,
            actualAp: 4800,
            actualDps: 2938.8,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2018Data;

