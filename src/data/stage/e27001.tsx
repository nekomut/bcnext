// Stage 27001 Data
import type { StageData } from '../../app/stage/types';

export const e27001Data: StageData = {
  eventId: 27001,
  eventName: "U.F.O.軍団 強襲！",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 1,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "①読まない作り方",
      baseHp: 3000,
      width: 4000,
      enemyLimit: 5,
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
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 15.46,
            magnification: "25%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 15.46,
            magnification: "25%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2,
            actualDps: 0.62,
            magnification: "1%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "②お湯張り線探し",
      baseHp: 6000,
      width: 4000,
      enemyLimit: 5,
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
          amount: "10000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 980,
            actualAp: 98,
            actualDps: 30.31,
            magnification: "49%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 980,
            actualAp: 98,
            actualDps: 30.31,
            magnification: "49%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2,
            actualDps: 0.62,
            magnification: "1%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "③小袋出さずにお湯投入",
      baseHp: 15000,
      width: 4000,
      enemyLimit: 5,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 1460,
            actualAp: 146,
            actualDps: 45.16,
            magnification: "73%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 1460,
            actualAp: 146,
            actualDps: 45.16,
            magnification: "73%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2,
            actualDps: 0.62,
            magnification: "1%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "④足りないお湯",
      baseHp: 20000,
      width: 4000,
      enemyLimit: 5,
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
          amount: "30000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 1920,
            actualAp: 192,
            actualDps: 59.39,
            magnification: "96%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 1920,
            actualAp: 192,
            actualDps: 59.39,
            magnification: "96%",
            count: "7",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2,
            actualDps: 0.62,
            magnification: "1%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "⑤うっかりかやく忘れ",
      baseHp: 30000,
      width: 4000,
      enemyLimit: 5,
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
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 4444,
            actualAp: 500,
            actualDps: 92.02,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 240,
            actualDps: 74.23,
            magnification: "120%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 240,
            actualDps: 74.23,
            magnification: "120%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "⑥温め逃したソース",
      baseHp: 40000,
      width: 4000,
      enemyLimit: 5,
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
          probability: "1",
          amount: "50000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 11110,
            actualAp: 1250,
            actualDps: 230.05,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 309.3,
            magnification: "500%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 309.3,
            magnification: "500%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "⑦勝手に開くフタ",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 5,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 26664,
            actualAp: 3000,
            actualDps: 552.12,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 618.6,
            magnification: "1000%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 618.6,
            magnification: "1000%",
            count: "7",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "⑧何分たったっけ？",
      baseHp: 80000,
      width: 4000,
      enemyLimit: 5,
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
          amount: "100000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 39996,
            actualAp: 4500,
            actualDps: 828.18,
            magnification: "900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 927.9,
            magnification: "1500%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 927.9,
            magnification: "1500%",
            count: "9",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "⑨流しがべこっ",
      baseHp: 100000,
      width: 4000,
      enemyLimit: 5,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 53328,
            actualAp: 6000,
            actualDps: 1104.24,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4000,
            actualDps: 1237.2,
            magnification: "2000%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4000,
            actualDps: 1237.2,
            magnification: "2000%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "⑩シンクへ放たれる麺",
      baseHp: 130000,
      width: 4000,
      enemyLimit: 5,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 66660,
            actualAp: 7500,
            actualDps: 1380.3,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1855.8,
            magnification: "3000%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1855.8,
            magnification: "3000%",
            count: "12",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 10,
      stageName: "⑪フタ裏にかやく",
      baseHp: 160000,
      width: 4000,
      enemyLimit: 7,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "200000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 3093.0,
            magnification: "5000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 3093.0,
            magnification: "5000%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 10000,
            actualDps: 3093.0,
            magnification: "5000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 88880,
            actualAp: 10000,
            actualDps: 1840.4,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "⑫失踪!青のり袋",
      baseHp: 190000,
      width: 4000,
      enemyLimit: 9,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 155560,
            actualAp: 15556,
            actualDps: 4811.47,
            magnification: "7778%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 155560,
            actualAp: 15556,
            actualDps: 4811.47,
            magnification: "7778%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 155560,
            actualAp: 15556,
            actualDps: 4811.47,
            magnification: "7778%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 108611,
            actualAp: 12220,
            actualDps: 2248.97,
            magnification: "2444%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 12,
      stageName: "⑬貰い忘れた割りばし",
      baseHp: 220000,
      width: 4000,
      enemyLimit: 11,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "300000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 211120,
            actualAp: 21112,
            actualDps: 6529.94,
            magnification: "10556%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 211120,
            actualAp: 21112,
            actualDps: 6529.94,
            magnification: "10556%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 211120,
            actualAp: 21112,
            actualDps: 6529.94,
            magnification: "10556%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 128387,
            actualAp: 14445,
            actualDps: 2658.46,
            magnification: "2889%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 13,
      stageName: "⑭混ぜる手にこもる力",
      baseHp: 260000,
      width: 4000,
      enemyLimit: 13,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 266660,
            actualAp: 26666,
            actualDps: 8247.79,
            magnification: "13333%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 266660,
            actualAp: 26666,
            actualDps: 8247.79,
            magnification: "13333%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 266660,
            actualAp: 26666,
            actualDps: 8247.79,
            magnification: "13333%",
            count: "11",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 148118,
            actualAp: 16665,
            actualDps: 3067.03,
            magnification: "3333%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 14,
      stageName: "⑮沈みゆくかやく",
      baseHp: 360000,
      width: 4000,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 322220,
            actualAp: 32222,
            actualDps: 9966.26,
            magnification: "16111%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 322220,
            actualAp: 32222,
            actualDps: 9966.26,
            magnification: "16111%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 322220,
            actualAp: 32222,
            actualDps: 9966.26,
            magnification: "16111%",
            count: "13",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 167894,
            actualAp: 18890,
            actualDps: 3476.52,
            magnification: "3778%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 15,
      stageName: "⑯むせる一口目",
      baseHp: 480000,
      width: 4000,
      enemyLimit: 17,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 377780,
            actualAp: 37778,
            actualDps: 11684.74,
            magnification: "18889%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 377780,
            actualAp: 37778,
            actualDps: 11684.74,
            magnification: "18889%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 377780,
            actualAp: 37778,
            actualDps: 11684.74,
            magnification: "18889%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 187625,
            actualAp: 21110,
            actualDps: 3885.08,
            magnification: "4222%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 16,
      stageName: "⑰曇るメガネ",
      baseHp: 600000,
      width: 4000,
      enemyLimit: 18,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 433340,
            actualAp: 43334,
            actualDps: 13403.21,
            magnification: "21667%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 433340,
            actualAp: 43334,
            actualDps: 13403.21,
            magnification: "21667%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 433340,
            actualAp: 43334,
            actualDps: 13403.21,
            magnification: "21667%",
            count: "17",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 207401,
            actualAp: 23335,
            actualDps: 4294.57,
            magnification: "4667%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 17,
      stageName: "⑱笑顔に光る青のり",
      baseHp: 750000,
      width: 4000,
      enemyLimit: 19,
      requiredCost: 130,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 488880,
            actualAp: 48888,
            actualDps: 15121.06,
            magnification: "24444%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 488880,
            actualAp: 48888,
            actualDps: 15121.06,
            magnification: "24444%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 488880,
            actualAp: 48888,
            actualDps: 15121.06,
            magnification: "24444%",
            count: "19",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 227132,
            actualAp: 25555,
            actualDps: 4703.14,
            magnification: "5111%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 18,
      stageName: "⑲手に残るにおい",
      baseHp: 900000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 140,
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
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 544440,
            actualAp: 54444,
            actualDps: 16839.53,
            magnification: "27222%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 544440,
            actualAp: 54444,
            actualDps: 16839.53,
            magnification: "27222%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 544440,
            actualAp: 54444,
            actualDps: 16839.53,
            magnification: "27222%",
            count: "21",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 246908,
            actualAp: 27780,
            actualDps: 5112.63,
            magnification: "5556%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    },
    {
      stageId: 19,
      stageName: "⑳ごちそうさま！",
      baseHp: 1100000,
      width: 4000,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 60000,
            actualDps: 18558.0,
            magnification: "30000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 60000,
            actualDps: 18558.0,
            magnification: "30000%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "508",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAACAQECAQERCAYjDQ5hDAZOLyqZLBvWFg5kWlOnRhzvLR3BWRSYdlf1Uzfpbx3fiBqeoKL9ih7lh4H8nRryty39qKO+xcrmzmb62wT51rbp5+T///////+0zl1EAAAAIHRSTlMAI1B29LP+//j+//////////////////////////8A/4yZsTgAAAJmSURBVFiF7ZfrtqogFIXjKhcB8YKacHj/tzyLLGs32nns72mO0iU4P1mIoKc/m05PwmwLEXqqe3C9AXB8Cyn5CDDra8T0RwCS8poE7vJngK7jTAjG6PwRADHtYgal2Wl2HEDEnDfNjh0FELcaU9l28GfHAKs/O5pu25+EPQAS99bnlC5Bhw8AWNoATuvrgfgnAMKEMLY1ALKnIq/9CTeVYPQWgAiT1vteuhtAa6ed0GsyonW2FqxAXgNI5fsWmixot2WgKRivMRWuDWOwFXkNYKYPvq5rW1F9HwI66iuuo6JU+3Gs2UsAb8LYt96H0QrdzfN86f5ZgD+ludNc1BJkw+KrlwBc+TEEa9vWW1lVlbhIC8hJCDiurbW+DSF4SV73Aa5M4/u+b1d5a+uSka2LsW978IbeN+a3PjgVglLGXDChvyhskffgLfXg/3UcEAlnKG/Vr2oXyd4NJKaM6pe2nBrO5/E8tuO57GOMi4XGqWWh70ciNWZZShpmyVNOMadpgv0wxARlqlkE2hnK3C++ANQ8qaQa+DUDbFQzSygcHd57mJBYGgBIPjcmqjQAIHuTVeyoNN6R/acRC7i+pHQeoCOiaoYmGyCmRLmRt7nxHQAmQ2lg3MgcpxSnnGNKMeboOGXblPAWUNakSiolnRumaRiG2nVOgP1hat4BlPsJBko5tIRzTkHkx+q2D+BlXUMIUU7Lwkj4wUmV0usFmVgbjn8uj3sAcvNDdO04TNEBAN5OvvvQEcBd6HlROwo4Pb9aHAa81hfwBXwBX8AX8AX8bwCEMXz7PAoKDgDg24c+iz2+Jd1dfwFgpslVAYUL7wAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 200,
            dps: 61.86,
            speed: 8,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 200,
            freq: 97,
            foreswing: 18,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 60000,
            actualDps: 18558.0,
            magnification: "30000%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.7-8.0s",
            delayFrames: "140-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "509",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQEBAQECAgIHBwcPDw8jIyM0NDQ6OjpFRUVUVFRVVVVjY2NkZGR3d3d5eXmIiIibm5ubm5utra3BwcHQ0NDT09Pd3d3o6Ojz8/Pz8/P///////980SQaAAAAIHRSTlMYUAB+nf/ZuP///QD7/wf/AAH//wD/////AP//AP8A/wsqQkMAAAPTSURBVFiFpZcNd6sgDIaxggqDscLl48Is//9f3gBqrVXX7mY9PdZjHpLwkjh0K3Z52RrcdX0LF9Xxht4CNG1HiuFfAZq+epNhIM37gHnxbGwgbwIaTNbGBWneAEDdctwrALMEvwoAb3CljD4AAuleAKCmhcgHSpg3fHhIwf8IQDVuMGEGadmDPxGangHuzjl1unGud9kxYNntUxv6fQBarX1u7R4A4Z8dZ0M7gObV1XMAO0psXncn/c5h2vUfHhU4GxzGZ8DuSpTSZ0DfXHYA7fYxpqyPKaUxemeNVhRj3GPcNqhWfAtYx50XlWlr+FGrG8C6ApTCl5vcxjgDHDoDrOUnGUQRZoB3ztUf7QkArbPXGeCW0MfgjLEQiDwBPOwhz0W4A7JF730Y+xcBZePM4qylLXVwMeBDwNMmEj7784xkQlm49u3rADL5iyUuZkKS6ACwcwxV8feEGi3odE/wz6/ZNhEMz5ofM8DomGKMTtWuiq/XIwDd+tMCgPLFUsPROGvZcQ2oWHZgCmWrZemSJYcAzHXxCsnPVTOTinwcvdZaEja6oW+bfUDPIy1OoB9HV0WEMoKUDWeUKZccbtA+oKNJ5q1TA4fQ2RqQxuU0hfWJ3ACIM3liCRX5oAtBQfgPRRijTfZIBx2hGkZY9NqAdFKsEVj7WEc/pv7yMdlWSKDW7BStZ+Amyy5EvSGMybTXP9WeDtOQR5hOQXKpxzAdBqXudbAlI9PuCukya1mNVkIuSZGhOAoXYii90UzHi318FtsAlpbE4eR7myAEXxY0sI3lSrDklRvVx7XaFnBZxlJ+fBwZKflHF7yvWSjFuezR1xHg3tWo0ITbKsXR+ZJAsspBe7f9wTbmO+uuxJmiehZiURIMiRhA0vQYsCQxEOmYCDVySKI29qgF45LjE8DSlkR0Ti0yjAWQd9f46PoTwJKDgSKuVOjgFEllaiCu+TkCavI88QsAWEYFq4QU0qpjQAmgBz0IV1JfQgj5CrqCoox07VEKCNbvMMpx1F7k5TJb7HQVIjs6zvmNdG42iFXhGL4QQp0sgjfHgLVV1TsplixKaxjdSkenAMTy89FIrufhXtUEPe1jvx9cNtZlGQYjGWwfdNXpQMPeyNvGjt6VMbNjGcpGSZiLFk4ozHgj+oPJ9ATI76xcaQOmpYKPlFJoxa4vAzIDNfDG3+KeSnjJMkrp7uv2PdsLgDup7blQgmN0vf2d7R1ADQeByq7fvwZUWwDf/wn4vv75JeBW6/d5+WUEn3WofF1+C7jbGQA9/tXPqwD4VxFeysG6xfIvjHHb7AL+AT526cLyJK5rAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 4444,
            ap: 500,
            dps: 92.02,
            speed: 6,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 163,
            foreswing: 4,
            backswing: 18,
            tba: 80
          },
          stageStats: {
            actualHp: 266640,
            actualAp: 30000,
            actualDps: 5521.2,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 1000,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        }]
    }
  ]
} as const;

export default e27001Data;

