// Stage 2163 Data
import type { StageData } from '../../app/stage/types';

export const e2163Data: StageData = {
  eventId: 2163,
  eventName: "SNOW MIKU",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 163,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "雪と氷の世界",
      baseHp: 150000,
      width: 5200,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "150000",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 600,
            actualDps: 1000.0,
            magnification: "40%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 169.8,
            magnification: "600%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "540",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQELDRkDCzwRERIjK0wfM3M6OTktS4A/UYkoWcZfXFxCY5taaZRLcK+Ab0hSc6aTeU51fZOlgDOHk6WGlq6DoMeuqKN7wPqfud28v7HEyMzO3OvC6vTp7O/9/Pv///9yeqWZAAAAIHRSTlMAovk1zf9kAv8AowD+AANiY/gDw/2G9l39WP7+cP//ALQyZn4AAATzSURBVFiF7ZfrduMqDIWJMZfBpI4CJkQE+v5veTZO2sl07F7m91HXit0V80naksARr3cT3zTpQtavTyYeV6m1/Hq5TqW14rYAqbYa3ReMUJldqpsRUOHAhd1n0ZcallcTi9gC6Oam2wku9oPger3cbhpOtgCCk75dL9da9gi6nG6X25KK2AYIdlc8cOKwJ0A435bb4lqUmwBZ0owHri7tAOh0w/c34VvYLCNivyCH24l2cnDIADFK3q6CbiyPHXB2+jOAZsi8mYKuRV/WHLZLKbtE15D6t9siypAIEVyXHUDogNOq0DagNyqifH0GaHdvTimFC6dwueqmPxCeAYH1bQ4Oix46OHQ+91uXAjvikB6tuhcBp0TsXK1tbQbGciAkStwaXDv3NiwbALMaQtZG4+kqDfynDKtOyIoZfEghdwBHGL5ZL6m1cJzmbFXJuRQvTS/e6iCmonHdAEwwXRNpXIXWwoSafeJcc6Q8T51+FFRuM2v42AOgmbkTpsnMtSCA5AsnisVMumXp+HYhN03HaQcwUbh0gnOTyQUZ1OirT9nXxbjWkr5eMMzH/Qim0EfaQXw5F47WMm5LiVSTObog3eIIyW1r8NJNOEKOqSURSvZEAXXNEKHko+llHt/mZANwhr2chRu9PkvxkrHDBe1KwSboEpfluTs75XzeALzbCQHEeNKlerIpUCqLPjz6oPcUfwE4nRaOMYjYWhyG1HzMUak7IGFjZib9F2Cafj3+pmlG0DmZ3n8oQmzFcxrGOyBC15ZsxtT9Cfj1ZCYgd+rVAKJ/JETRU5AQGP+jRZZ23QdMXcIcNCitIuWEC3MHuFZdKBgwdvPfKbzbnGpJMQuZSoiEAa2VY17MSpfeRqepavEB8PJbQ5xQWL8IbJMHZqVi9MQ4EacjNq3E3o7PvfAewcu7cc7wKDHVKEPylmqMnDmdz2IVJzm5BXgzM5eCkCOaP5cVYLmhFzO/wAl0pFZePgVwqSUmnNalVywC4FuJkB4qoNi/pL4fXjsAk/FoRrUxTYDcAaXFXEtZHxBi0m4fYJaCIvnofcsQrDUCwEa8O3SueXPz+tv+BGA92saTGgaVS+8ab3sIteUewmK+AJilFraD9UopW6PCWwtWqzUHj24os/kMYJB/SXYYvFWKmKziFeB7DlmV9puwCTBz7kNnrbLKU4q4EMbGRqLeCwp51PzIYgswB5ga/DAQNiOsQxwxKvIxRoo2JogCLXOYzCZghnGDU4sValA22rWHyXvyhDtLVLkPU5i3IzABGyhRhIB+gIjdtfLs+0qPXQFpcR/P7mkLYDIy5IIdSFkCYPAJ8quEjgCAGLpaKjXj0NpOYZpn9AqGb7BrBD7f41gJPlKvjE9dxsbz9tFm5iWiWewAANzb2AEq9aSgY+8M77GX5LBspnAfxFBaGIcUqdcQPgeLAy4imR6PpyHzMpudFFaCmWcjPEMJJIJiUBz6Jz5wZ0mpzxrpjphMH/kePbSkXtDcBR0GNIO3gxDm+ClgWs8weRgRfsxwiSwYrhGRbdQ3VnM8fg3ojJHudegxeKwfyK872bciuJ+BB0g/oi/QUeM4yse5+n2AONQ6jjGPTj7/mPkBwLUifWsf3nx/AuBREF7u/xlwwAmSmhPmXwFylMLSx3f3HwC6Derjr4cfAuRBfBPwz/Y/YB8gD4fDcLfDQcqdp2D/AfW1I3OpgLDeAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 14000,
            dps: 1573.03,
            speed: 7,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 267,
            foreswing: 98,
            backswing: 51,
            tba: 85
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 10500,
            actualDps: 1179.77,
            magnification: "75%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "歌姫の雪像",
      baseHp: 290000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "200000",
          times: "-2",
          limitText: "-2"
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
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "350000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "30%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "30%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            count: "15",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "540",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQELDRkDCzwRERIjK0wfM3M6OTktS4A/UYkoWcZfXFxCY5taaZRLcK+Ab0hSc6aTeU51fZOlgDOHk6WGlq6DoMeuqKN7wPqfud28v7HEyMzO3OvC6vTp7O/9/Pv///9yeqWZAAAAIHRSTlMAovk1zf9kAv8AowD+AANiY/gDw/2G9l39WP7+cP//ALQyZn4AAATzSURBVFiF7ZfrduMqDIWJMZfBpI4CJkQE+v5veTZO2sl07F7m91HXit0V80naksARr3cT3zTpQtavTyYeV6m1/Hq5TqW14rYAqbYa3ReMUJldqpsRUOHAhd1n0ZcallcTi9gC6Oam2wku9oPger3cbhpOtgCCk75dL9da9gi6nG6X25KK2AYIdlc8cOKwJ0A435bb4lqUmwBZ0owHri7tAOh0w/c34VvYLCNivyCH24l2cnDIADFK3q6CbiyPHXB2+jOAZsi8mYKuRV/WHLZLKbtE15D6t9siypAIEVyXHUDogNOq0DagNyqifH0GaHdvTimFC6dwueqmPxCeAYH1bQ4Oix46OHQ+91uXAjvikB6tuhcBp0TsXK1tbQbGciAkStwaXDv3NiwbALMaQtZG4+kqDfynDKtOyIoZfEghdwBHGL5ZL6m1cJzmbFXJuRQvTS/e6iCmonHdAEwwXRNpXIXWwoSafeJcc6Q8T51+FFRuM2v42AOgmbkTpsnMtSCA5AsnisVMumXp+HYhN03HaQcwUbh0gnOTyQUZ1OirT9nXxbjWkr5eMMzH/Qim0EfaQXw5F47WMm5LiVSTObog3eIIyW1r8NJNOEKOqSURSvZEAXXNEKHko+llHt/mZANwhr2chRu9PkvxkrHDBe1KwSboEpfluTs75XzeALzbCQHEeNKlerIpUCqLPjz6oPcUfwE4nRaOMYjYWhyG1HzMUak7IGFjZib9F2Cafj3+pmlG0DmZ3n8oQmzFcxrGOyBC15ZsxtT9Cfj1ZCYgd+rVAKJ/JETRU5AQGP+jRZZ23QdMXcIcNCitIuWEC3MHuFZdKBgwdvPfKbzbnGpJMQuZSoiEAa2VY17MSpfeRqepavEB8PJbQ5xQWL8IbJMHZqVi9MQ4EacjNq3E3o7PvfAewcu7cc7wKDHVKEPylmqMnDmdz2IVJzm5BXgzM5eCkCOaP5cVYLmhFzO/wAl0pFZePgVwqSUmnNalVywC4FuJkB4qoNi/pL4fXjsAk/FoRrUxTYDcAaXFXEtZHxBi0m4fYJaCIvnofcsQrDUCwEa8O3SueXPz+tv+BGA92saTGgaVS+8ab3sIteUewmK+AJilFraD9UopW6PCWwtWqzUHj24os/kMYJB/SXYYvFWKmKziFeB7DlmV9puwCTBz7kNnrbLKU4q4EMbGRqLeCwp51PzIYgswB5ga/DAQNiOsQxwxKvIxRoo2JogCLXOYzCZghnGDU4sValA22rWHyXvyhDtLVLkPU5i3IzABGyhRhIB+gIjdtfLs+0qPXQFpcR/P7mkLYDIy5IIdSFkCYPAJ8quEjgCAGLpaKjXj0NpOYZpn9AqGb7BrBD7f41gJPlKvjE9dxsbz9tFm5iWiWewAANzb2AEq9aSgY+8M77GX5LBspnAfxFBaGIcUqdcQPgeLAy4imR6PpyHzMpudFFaCmWcjPEMJJIJiUBz6Jz5wZ0mpzxrpjphMH/kePbSkXtDcBR0GNIO3gxDm+ClgWs8weRgRfsxwiSwYrhGRbdQ3VnM8fg3ojJHudegxeKwfyK872bciuJ+BB0g/oi/QUeM4yse5+n2AONQ6jjGPTj7/mPkBwLUifWsf3nx/AuBREF7u/xlwwAmSmhPmXwFylMLSx3f3HwC6Derjr4cfAuRBfBPwz/Y/YB8gD4fDcLfDQcqdp2D/AfW1I3OpgLDeAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 14000,
            dps: 1573.03,
            speed: 7,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 267,
            foreswing: 98,
            backswing: 51,
            tba: 85
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 21000,
            actualDps: 2359.55,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "雪にともす灯",
      baseHp: 390000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "300000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "450000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 3600,
            actualDps: 4695.6,
            magnification: "2400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 2880,
            actualDps: 1183.68,
            magnification: "2400%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 30000,
            actualDps: 13846.16,
            magnification: "200%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 30000,
            actualDps: 13846.16,
            magnification: "200%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "540",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQELDRkDCzwRERIjK0wfM3M6OTktS4A/UYkoWcZfXFxCY5taaZRLcK+Ab0hSc6aTeU51fZOlgDOHk6WGlq6DoMeuqKN7wPqfud28v7HEyMzO3OvC6vTp7O/9/Pv///9yeqWZAAAAIHRSTlMAovk1zf9kAv8AowD+AANiY/gDw/2G9l39WP7+cP//ALQyZn4AAATzSURBVFiF7ZfrduMqDIWJMZfBpI4CJkQE+v5veTZO2sl07F7m91HXit0V80naksARr3cT3zTpQtavTyYeV6m1/Hq5TqW14rYAqbYa3ReMUJldqpsRUOHAhd1n0ZcallcTi9gC6Oam2wku9oPger3cbhpOtgCCk75dL9da9gi6nG6X25KK2AYIdlc8cOKwJ0A435bb4lqUmwBZ0owHri7tAOh0w/c34VvYLCNivyCH24l2cnDIADFK3q6CbiyPHXB2+jOAZsi8mYKuRV/WHLZLKbtE15D6t9siypAIEVyXHUDogNOq0DagNyqifH0GaHdvTimFC6dwueqmPxCeAYH1bQ4Oix46OHQ+91uXAjvikB6tuhcBp0TsXK1tbQbGciAkStwaXDv3NiwbALMaQtZG4+kqDfynDKtOyIoZfEghdwBHGL5ZL6m1cJzmbFXJuRQvTS/e6iCmonHdAEwwXRNpXIXWwoSafeJcc6Q8T51+FFRuM2v42AOgmbkTpsnMtSCA5AsnisVMumXp+HYhN03HaQcwUbh0gnOTyQUZ1OirT9nXxbjWkr5eMMzH/Qim0EfaQXw5F47WMm5LiVSTObog3eIIyW1r8NJNOEKOqSURSvZEAXXNEKHko+llHt/mZANwhr2chRu9PkvxkrHDBe1KwSboEpfluTs75XzeALzbCQHEeNKlerIpUCqLPjz6oPcUfwE4nRaOMYjYWhyG1HzMUak7IGFjZib9F2Cafj3+pmlG0DmZ3n8oQmzFcxrGOyBC15ZsxtT9Cfj1ZCYgd+rVAKJ/JETRU5AQGP+jRZZ23QdMXcIcNCitIuWEC3MHuFZdKBgwdvPfKbzbnGpJMQuZSoiEAa2VY17MSpfeRqepavEB8PJbQ5xQWL8IbJMHZqVi9MQ4EacjNq3E3o7PvfAewcu7cc7wKDHVKEPylmqMnDmdz2IVJzm5BXgzM5eCkCOaP5cVYLmhFzO/wAl0pFZePgVwqSUmnNalVywC4FuJkB4qoNi/pL4fXjsAk/FoRrUxTYDcAaXFXEtZHxBi0m4fYJaCIvnofcsQrDUCwEa8O3SueXPz+tv+BGA92saTGgaVS+8ab3sIteUewmK+AJilFraD9UopW6PCWwtWqzUHj24os/kMYJB/SXYYvFWKmKziFeB7DlmV9puwCTBz7kNnrbLKU4q4EMbGRqLeCwp51PzIYgswB5ga/DAQNiOsQxwxKvIxRoo2JogCLXOYzCZghnGDU4sValA22rWHyXvyhDtLVLkPU5i3IzABGyhRhIB+gIjdtfLs+0qPXQFpcR/P7mkLYDIy5IIdSFkCYPAJ8quEjgCAGLpaKjXj0NpOYZpn9AqGb7BrBD7f41gJPlKvjE9dxsbz9tFm5iWiWewAANzb2AEq9aSgY+8M77GX5LBspnAfxFBaGIcUqdcQPgeLAy4imR6PpyHzMpudFFaCmWcjPEMJJIJiUBz6Jz5wZ0mpzxrpjphMH/kePbSkXtDcBR0GNIO3gxDm+ClgWs8weRgRfsxwiSwYrhGRbdQ3VnM8fg3ojJHudegxeKwfyK872bciuJ+BB0g/oi/QUeM4yse5+n2AONQ6jjGPTj7/mPkBwLUifWsf3nx/AuBREF7u/xlwwAmSmhPmXwFylMLSx3f3HwC6Derjr4cfAuRBfBPwz/Y/YB8gD4fDcLfDQcqdp2D/AfW1I3OpgLDeAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 14000,
            dps: 1573.03,
            speed: 7,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 267,
            foreswing: 98,
            backswing: 51,
            tba: 85
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 35000,
            actualDps: 3932.57,
            magnification: "250%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2163Data;

