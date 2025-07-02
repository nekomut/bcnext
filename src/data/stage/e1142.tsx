// Stage 1142 Data
import type { StageData } from '../../app/stage/types';

export const e1142Data: StageData = {
  eventId: 1142,
  eventName: "じめじめなめなめ大進撃！(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 142,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "雨天決行大レース！",
      baseHp: 3000,
      width: 5000,
      enemyLimit: 1,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "ビニール傘争奪カップ",
      baseHp: 20000,
      width: 4200,
      enemyLimit: 8,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 300,
            actualDps: 160.72,
            magnification: "40%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 500,
            actualDps: 326.09,
            magnification: "40%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "雨ときどき雨ステークス",
      baseHp: 50000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 750,
            actualDps: 401.79,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1250,
            actualDps: 815.22,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 3300,
            actualDps: 1500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 750,
            actualDps: 401.79,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1250,
            actualDps: 815.22,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "スケスケパラダイス杯",
      baseHp: 200000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 2250,
            actualDps: 1205.37,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsYGBgcHBwdHR0eHh4fHx8hISEiIiIpKSkqKiovLy8xMTEzMzM3Nzc4ODhBQUFHR0dPT09PT09ZWVlbW1tiYmJlZWVycnJ0dHR3d3d/f3+JiYmRkZGhoaGlpaWqqqq2trbExMTOzs7Y2Njg4ODl5eXr6+vw8PD29vb6+vr///////9GLDfdAAAAQHRSTlMABArdEX8cpf5WvNLn9TlJIy6RcGQ89HSbh0q37GH/0Hj0h/6V0P67qP7P/9Hk/9///+////7+/////////wD/E2hCfAAAAvRJREFUWIXtVFlz2jAYxA736UAghMMETA3CxJawTkuq//+/qmTSBtN22kxf+uB98Hg82v12V5JrX/8RtUqgEqgEKoFKoBKoBCqBSuB/FPgMnLo3HI6GXv1TrO+oT9f7w/nN4HR8ndadT9LdxTEhXCqttVKCXg6vj+5n+N7+InT+AS1Jsnv8OxeOt1g8HcgtvYCi5/WfTThOfX26XC6sTNY61yLLkvVvPDiu6zoGzfXL/pAIztn9eKk4jDE/T39Fd6evx+N+v3vdHS6IMiwQond8ijgXPEV0//OOOtN9QoQUjBKCuc4JYxDLcgM8DEMfEIlZsrjnN58Tdl2tFU6zXFPFuborAPoh8NtAKRK93PEfl/DHNElNdG007urLZUylpDHW5rm8i/8cy/I0Rm/45lUZNxzpDDGUMgDYqSwwTT4GalOAprG4pQv0dr5wnmqK0ziM/TZ6Kws8p8byu1Nlzg6D9J1qn1IkL0NvcUyRSDNNIUGz6Et5B3aUk+sxk0ZASRzbRrS+lkrg3O5acw9IapZRLMJgXhLwzhJft5xjE0GkEbSx6TWGRkuvWFZ/AQRibiyA3rBU4S7OYFoszpAkkkUhs5VFVwEK5ourgtv5AiHEAq86pbPcHG9gim1iLSFDDIbGAI0LG1rIOCaXpVcwHG+yOSXn5ejmNjneaDLurkBUtKghhiQCIhcxE9Ly4wjJXIatybAgOU3PK/2Z6s+bbWAAASoqw1GUQmJyp1pyjCAI7YZmYRCs5l7tJ7heY+X7IIoARBG2Z5cFAUAq5xFCJi2hBAHCMwFWq+225Tm30R232Zmb8X5Alc5YajITmbMQ2AYzjIkoroIMfT8I/UG/Pxh0x43JU8f8XG0ar9Hqraz5ILymV8pmSNttH9GbW2Td++0PDAb9h27rqV57HPcGs4H95GMz3/pljJHQfplFEBJ7r6l17xuUFXrdhunRHXVGnUlj3OpuTpveQ7+/MpgNvmNWYLsNt8a9wUOv1+22WiaEzeDUvgHfiBulYfASJAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 8000,
            actualDps: 563.38,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "なめなめスタリオン記念",
      baseHp: 400000,
      width: 4600,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "10",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "21",
          treasureName: "にゃんこ福引2017梅雨",
          probability: "90",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "2",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
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
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 9900,
            actualDps: 4500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 4500,
            actualDps: 2410.74,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 2445.66,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1142Data;

