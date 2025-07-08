// Stage 2209 Data
import type { StageData } from '../../app/stage/types';

export const e2209Data: StageData = {
  eventId: 2209,
  eventName: "さらば、全てのにゃんこ。",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 209,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "終劇",
      baseHp: 1000,
      width: 4500,
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
          enemyId: "651",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIFBAQFBQQGBgYLCwsODQ0QEA8ZFhQhIB8sJyArJyUrJyQxLSkzLSY4MCtBOzRORz5WUEVlV0RcW1R4bVqcinbOtp1ZP7TTAAAAIHRSTlMADBwlLUdZa4KK/5u68Nmv//+98f//0P///////////6wDozkAAALzSURBVFiF7VZrk6owDBXlZcHSSGP6Qv//v7xpebl7cQbu1+th3ZEznHDSJqmn0xdffPHF/4qivnZSttX5n9RZ3iqtkQjh1uTH9ZVUSCxP0Ko56qIGZPC/OYQsDunL+PpFnaDKA/rzzfBLFy3fGEuq2h+gIWfQjFIG31hvtdjtoVDOG/LeWEtkjfWejDcI9U59JlnFEm+cjS5YnJxgszcBmDP/BZnt0p9b+EuagGpnPRWAm3otdu5DqTcDELY7HXwKoLt9+lO5vQZa7A1QCKB3D1zSqHkJ5WVngLwVmpZGQOKMAEAJs7up60GA1qmbeCKA4pGglHo+dzdk/eIICgE0xFeDVlH/6vfVUczBvUioHxA09Af6uXxY8R5BCOrrvUuYkBXSRR1/4kXPYW8jrWn0wxOFiov/HJ5De3wyX+p7n/zT494cGWcrKhl3D1R7bJ4uaLgWEuDINFyR3TSO0Pq2VEB1/4nufMqaX1ycfFl3f7y3w2P20FjrwgznnC94AnobVljfl8XpDD/J4VGM61gDuTfeOKYrwrdnkUlZyhvRyjn0ZHXayA4paJ3yQm2csRygJONgzBXB8QAOUmrFR8lCBsNR+zEAP4x+hIs051bEY2fibDwKXC+FMIyJ5G/O2v4yOjCOPOfOl2MHHCCbAkTGW8sOHHD1Gg6fSB/JGGByQI6snwIEclXx6GPQFNPzczYFAEEjyY+5KDerg8Wuj++Q9jXw8UVLWtGvWhzMJKc7OdAq0FwgGHhgPJ+DggBzzfB6aoOaC5jCXInaWoDZASne6WGECZaXn6etDmaimOGjmKcyMsntPII9gbkta2DtZI0CGUDDky+sbl38UTSSZEcYsmztmgrp2iocx2X0m6ohApes+CtomsjlTOOpuAwECf8C1S5NdumMrvJPqBC79a4V4lbkHS8CvI2E62Cul0+oXGjz/DIFYKnM86tQA739OOmCEZ9hwwapwrSEaSLguj1bj+IGy+21nin1dRN1/EvXJuZT8Q8nyXZTsRcNkAAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 50,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 50,
            actualAp: 1,
            actualDps: 0.03,
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
    }
  ]
} as const;

export default e2209Data;

