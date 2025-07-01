// Stage 1382 Data
import type { StageData } from '../../app/stage/types';

export const e1382Data: StageData = {
  eventId: 1382,
  eventName: "ジャングルサバイバル",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 382,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "食料を求めて",
      baseHp: 1500,
      width: 4000,
      enemyLimit: 10,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5700",
          treasureName: "キャラクタードロップ(5700)",
          probability: "50000",
          amount: "204",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 11.54,
            magnification: "5%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "3",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 25,
            actualDps: 8.82,
            magnification: "5%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ネコの川流れ",
      baseHp: 60000,
      width: 5000,
      enemyLimit: 20,
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
          treasureId: "7400",
          treasureName: "キャラクタードロップ(7400)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5600",
          treasureName: "キャラクタードロップ(5600)",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 500,
            actualDps: 176.47,
            magnification: "100%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 500,
            actualDps: 176.47,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEJGSYOJzsIM1cJNFgLNloLNloNOFwQOVwWP2EXP2EcQ2UiSWoiSWomTGonTW0sUXA5W3Y5XHg6XXlAYn1ObYdPb4lQb4hYcYVdepFogphrhJpyip9/lKaCmKqHnK2NoLGUp7adrruhsb+isb+oucevvcizxta5xM7BzNW+ztzI1+PS2N3T3ujc4ebe5u7l6/Hp7O7t8vb29/f5+vv9/f3+/v7////////////t8zxSAAAAQHRSTlNCY3+c0fQAAAABJRI/WwAAaUl2wACTNQCLs2K1lNIBtc9H6wLImfMy980C/XD8AC3/+gL/hf//AP8A/5k7ABf/YSCGvAAABNhJREFUWIXtlm13sjgQhum+tIZAFIoKypuAFEUsSEGkYP7/v9oJ0Cq1rfV5vuzZs3NabUNyZTK5Zwau/k3j/gf8OwDHql4jMjyzbfPoMO0NfmHcwZ0uqt8B1DtlsNj0p94EONb7KdI9fD75JsBTVR/Mgb6aoF8EDCYv9cFFs0g/EW4CrNeblyNcgxSteDQkvwJYL5Oq3g4FP56hXwAQgiZ2/HqcIqxHTSTIbQD4JdhO6AIRInixN0E3AgiBacQq6AoOgGQvtCbo1iPAF5oltFxJgJCsYPl8C2C7dQkC4z1KC0/GCOHZsqoYQPmZlOt6bbru2kVqQmnuqwJCZAf6XE+7Kd9jTukMF+kVlJaRNeKHU1NpYiOM5JHwLaEBuMpUWVR7E8lhSSnNgrksYLgVrEVZngaGcA1gwmQ0ezlup7zaIGge+bauajl4BD+OeB0AFyGtoLIovBoUtCwYpozY6iyjxePXp2gqUgMYEt56qQ6uwsteUhRZlhdplOZ5ElNq4G89qDZdLkMMXo+HtYIk1YvzIs/SOEnhGKF85QhVordpRHg7fz3u4Q8iyHMvjFNgBMboWhC3k7gtKAqIOaCvLCtB4gTzkihK/DfL3wAIrzIdwxJ3u11YCeQFRtcU1APAZlYewcbT3W7xNPNKGusSc+PnAPA9LDwJKSaaLFTVBzmtdAmzo1wu6saarw4A/yDeyjJLgLJGZpZhBKCB1NdGPLqAEAwKB4nzJ8BQUUD9aOSXiQ7DBKuO4wRwgcAwxmIDGZKOI2gO00ca+8YIt4DDfn+o652JMMgwnjMvABGEUcqkmMPMMeyHWoLol6DvIofEo4kh9JrrWiH8uEVAWGUnyprEAANR+vZclUei+MhEXrQKpeXjGQCqiAl787KfxrbM4idqftIhyrJdl8Zh0o7kEYyVxrkH1euiiRiS9CAO5hILrKg5YdYuzlh6gEVhFCdJzNCFI/aO8LxatnWdYEn3fUeX3LWCBVmz/SgtWhcAk6YZZCuLjSYMe4C96aXLrj/B7pPFS3XcT5moeWE01izbD4IQLPAdx9Dgdsh5SasPa/fZ1UELoMHmwpDZFos39SBIDl5gxvPv3fwEOIIc8OZ55tPMbiUIwt4fdqfiTs4+T1J23+0ZjoBnmydIpqY4M/Eo09NUwovj8UWJZZ2pNTSBLu0iydvorDrH9ljAjQC7mfzYiSGAgdZPb+5sBymBijbE6sqzmYzzyNFGACFN2vBG1gnC6L3NcOc0KXx9UmCveRAGEcuEMg1ZuEeiIDzmcIlpwnzrFageAN4RiqXC+sk8aO693TJLojD0GZBmIQN86QHEaZ6lOlQjIsCJ31TcfjYZGIGOnV6f4Qb9oEJNZCnN8hFUHDVuQAakaRKDgll2BuN+EO8/EAivxTSxpKa1iWOjE3HnTHpRorn7jwRIwnlY5qygsY6HBVFW55YNZs1BBh9bDAAuCG0EijzyZhNssveHVijos/rIAJcElo7QWOA2vc2x3n3zqoIawIlwPpMlD8buW/P91Ab3LeD+obUB+ZAsBLlnCfm+bTf9AVZ2gJMNSM+RFtCDDnrzLwDMncFpAQHATnkYdNZsehXQHapdorjmxaIfAX5q/z0Ax93d3f3B7M9LY8PwmOO4LwEcrPuL2d+fG3sEoLuzJf8A+oG/j4JK714AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "3",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "2",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 2000,
            actualDps: 408.16,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "砕けぬ岩 砕けそうな心",
      baseHp: 180000,
      width: 3500,
      enemyLimit: 30,
      requiredCost: 120,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "0",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "3",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAwMFBQUKCgoZGRknJycyMjI8PDxDQ0NISEhMTExRUVFVVVVZWVleXl5iYmJmZmZpaWltbW1ycnJ1dXV4eHh7e3t+fn6BgYGEhISHh4eLi4uQkJCWlpabm5ugoKCkpKSnp6erq6uurq6zs7O3t7e7u7vAwMDKysqCqAexAAAAQHRSTlMABhEZJC86RVRcZnB6hI6YqbO7x9Dd8//q+v//////////////////////////////////////////////////z1vAmAAAB+hJREFUWIWVV2db20oTDSGUBC6YYmyra7VFW6RVb5bt//+v3lnJBHOB3Lzjhw82OmdnzrTVt29/tLOLq9vFw9WfH/rKvl/ePK5t2w18++Hy/0b/uHncOD7lNBZcxL69uL48P/t79K/HlYOzqs4wLhNGqRKuZW3Wz38Xy8+HlR2kBY8THtFm1zZa4DAkMaFo9es/0Rd3S9tX7bgfmxhFpD+Mhz6LAyKLImaK2P/8EX1287RyRbff78cRgAThYb8fUhapIk3ADyy4vfgTwZMdlbvDftwaG4c6Q3q/1QzLVCVJmvKYxrHz+LWWN1ZxOIwzHAi6dqviTnPeNGVZ1XWTJ4mQyn3+iuH7xi0P21cbt01Tp0kuRbPf77Zd0/aVSrXOUuerZDzYYTxuj/5vh6btCpUaPPw0jn3bdIVIIRLlW4sfn+CvLN/HzSzA2MPxTZupRJz80jaZBAKdC3dz85FgHQQez7ZGg7GHiNu+VkrU+1dFG7C2TIBCFxrbTx8y4CrfV1m/gwz24H7bNLkS5fH8bTNbB0qmaSa5tK/f4xcO8d1AFt2wG7qmropMJ4ksdgYPTrX1kQH8gowqKoLlO/z9yvMDz5eFOaStEgWfRGVTTsdt37xZVyrwAcS1T3NxZ4uiH4kb66qtO4g9TeBPFTuIYDyFN/BPg09UHjy/4S/t3eGwP5RulBQQvAa8lFJIkXS7YTjFt82kYp6KRFlvQ+LBMwW420e+zNs+h+QlZdvkHAcoB0Fn5ExQgzZpUmRCZv7vRJxtws5k65B7sapKJdNquwPb1jkO8qE10v2Oo+tKIXIo0IRbF0eCnzYrDcG4w4jEqUy3ULvm626oaaCHoW9y/ZsAPFNZkQqlvccjwaMvyilfhyIgIpX9az+2Td/xgKeCIVzPQbQVxA8EGtoqPrpwbtFYTz0w7hjRUHxHfA/J74YMR1FE2ETQtqXOtFS6BBFk6t1NBLeuYLLdG4p9zY/FY6p39rlv65ohVk/4Quc5HK5LaGyZuPdzE0QxE9W+78dx18pku5vx41vutiWiUyKKPM8hfJnlEIFgzkTw05GEKm20HndF3Oxf50n9m6HpVVRBPsF/IIDDEygSiWk4JfI5EJgnUMPQwL06ijHu3tXPUGAF+pe58UBJIUyVMc6s70CwjGiksvnBKp08Ht+XP5SBpkkKbWAc0AaudCKUSmxTjAsfk6Q0gLbL8gk4vIMbAkEzmXWVzouMmxIvSlAiSaeG+uVEWJXdBBS0b5tPrI1jncqiyvJCgKlsklKIyYNLO8RCT2nuC6/6jKFtqNDQgWlRSQYESZmBjErG9sVURz5iMp9c6KKk/wTfVURBD6fAQqRSMdQmZEFxMhF8W3oREdnkwpaTtvnoQl9gMwRSpTDiStKYS2MUzwQLB8V6UqEddFR1H13oNUl1qjPJcEQppowp4wCOZoJbmCOZnGRsa5Edo36XBIWhBcBlMMFxGGGulKJRZJ0bgms7ktkxD7A7TCwwlE8peu4pyQgBIEigYoqj2DiA53b8sQlFlszd1mW86tquLuvuTYy2Rx7cMgBVlSCehHELtxaKEXPnbb/2udbHRzNWdHVuMla33XGabTMXxcCQ9duKi0k/lXBKEIuWswd+yIvpwLYvmIYcp0akrGq6vu+HPsUBiako4HurXhmAEMX+wzzRkBcks/pdTSHjmcgrSBp4CjM8FxEB7akudVoO9ZxBQ0AwtaYle2UjWKsTQ9uXEUs1k8OQA5EywwjD6YTROFEm/DqfPZBAQP3jUFz7AUI0BfWaQREcEVpX2izyjGOCfM8LY8W48V2YUTCZAAJiHzfDwkMhQjEwDB0JgiDEUklzp9GKVhXc1fw4fY391SAL1H/dTbcOZDgKmW6G2POhTEKawU2EE8xIBbOlIiwR7wlMWVDndUFf2BhBtIix0PMRpaC4qaOq4BBZN4ALOCZcnRIknLFg/Xu1rVFk1Aog3IDyGD51ZyZ6n1OUSES8kJ4SKOgDUNV5u6U8hizEEeQiiOLJaDmNhXbb8Aic80KGmTo9n1CGXt62840j4TE/CKFVJgKi4Y4Fa6CpEnAtCHyMGQgHVx6wqYiwcE4urWdLT0WhH8JjE55R0YMLdZXzmEFkLAooiVUC4ph5DvrRyF19P7lgnG98OAdhjPmRQZZ1CQOUctjxRHGECYlZEClggApizF++f4W4eLJcZHQAxMxAuc7hbYHDwhYcaAgOA58mEpILenPn57d/2bVFwAVIGD86YQyAUQS/cNjPQRgGTJiZAqE663/jzWhEPgQRkXhmAA7Ao4gySKvEfghGIBJ4JLDuv38kuLTg7cjzwQk6MwCOICiveCLwDAGIBLEEq+uPcKPDi4MCN8Aw8+YwOIPyxBOZIG4Q+oGBR9S5/RQPk2XpTNUQBBC10RHBO8vEBRPMhQg96G0Secsv8HDhf4YtBfUYYGp6A4UBxGMk4Zy4LlxFESOO9XjxJcG3szsLOjPw597AUFvmegNO4NBzPSjIyH747KZ/GsYT1AN0NGiJMTLFaWYSfHFdaFTf+uSa/8GJp43lIILAQshrZCoIaHy4CLnL/3qDPb/8eXu/eFq+wMIFLPwR7DohyAkJ9qyX58fF3c31xSdFYOx6uToxy3Y8F8yxVrZrW6t3tnn6UMlgl4vl6u/s5fn+q5fg88vrm3/uF49Pz8v1+mWzOR64eVmvl89PD4u7219X7yP4H3R4DI4ELve1AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 7000,
            actualDps: 1428.56,
            magnification: "350%",
            count: "6",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "激流ニモ負ケズ",
      baseHp: 540000,
      width: 6000,
      enemyLimit: 40,
      requiredCost: 150,
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
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "204",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "5",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "5",
            spawnTime: "30.7s",
            spawnTimeFrames: "920f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "5",
            spawnTime: "31.3s",
            spawnTimeFrames: "940f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "15",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "696",
          enemyName: "大岩",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 2000,
            dps: 408.16,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 147,
            foreswing: 16,
            backswing: 131,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 13000,
            actualDps: 2653.04,
            magnification: "650%",
            count: "15",
            spawnTime: "60.7s",
            spawnTimeFrames: "1,820f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "61.3s",
            spawnTimeFrames: "1,840f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "62.0s",
            spawnTimeFrames: "1,860f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "15",
            spawnTime: "62.7s",
            spawnTimeFrames: "1,880f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "695",
          enemyName: "丸太",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIEAwIHBgULCAYNDAsQCwgSDgwVEQ4ZEAsZFRIgFA4gGRQeGxglGxUsGxMqHxgmIRwtIhsxIhg0JRo0KR88KR00LSc6LCE/KyBBLiE4MSo+MSZFMiRGNCdAOC9FNy1MNylHOS9POStMPDBROyxTPC1UPS5VPi9SQDFXPzBXQTBORDpVQzRZQzJcRDJZRjVdRTRgSDdZTUFiSzllTTlnTztcU0loUT1rUj9vUjdtVD9oV0ZwVkF0Vz1yWEJpXE9zWkR3WkF1W0V4XUd5XUN5X0d6YEh3YU97YUl9Ykp2ZVN+Y0p/ZEuAZE2BZU19Z0+CZ054a1qEaE+FalGAbFiGbFKHbFKDcF2Jb1SLcFSMcVSLc1iNclWOc1aNdVyLdmCRdVeSd1iNeWSQeF+UeFmUeV+VeVqWeluUe2GMfnCXfFuVfWOYfF2ZflyXf2WSgnCXgWebgGGdgmWbhWyghWabh22diG6ih2ifiXCkiWqai32hi3KhjXSmjG2jkHanjnOpjm6lkXemk3mnk3utkXOolHuuk3SqlX6qln2ploWwlXarmH+xlnmtmX+wmH2um4G1mXuvnIKtnYuwnYSynYS3nH+ynomyn4WzoIa1oYm1oYa6oIG2oom8oYO3pIq9o4O5pY2/pIe6p467p5XCp4q9qZLEqYu/q5fGq43BrZnIrI7CrpvDr53DsJ7EsZ/MsJDGsp/JtKHMt6TPuqbQvanVv6r1J+U2AAABAHRSTlMAAgYJDA8RExQYGx4hJy8zOTxAQ0ZLTlFXXF9jZWlsbnBzdnh+gYWHjY+Slpmbn6Klq7C0t7m7v8LGzM/S19re4ePq7fDy+Pr+/+b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cLOuhwAACHNJREFUWIXtlm1YU+cZx1Ottt2crurmZm27ddVOp3NqbUWx4FqnxxAwKkREeREURSGEFwUiWBEQCCGnCSeJx4NAEl4kBQMNgSJvBhMiCcSkRAxZgIQQI4IQKUkMsO0Exel27eq3feKX5Jxcz5X//9zPfT+5nweDmWOOOeaYY47/H/MXLHxr0eJ3f/XR+q1bN36yevWadRs2bvr9wv/x6wVLlv/6vQ/eX/Xh2q3bN61d9+k2N3ePv3751d8AAMDi8Pj9Pjj8wSNh8ae8PFbO+2/1Gys37QO8cACAwx70PRFAIBACQ06Eh58+ExlzLjE5LQcEadQc5GZdU2vbjQv4nVtW/If+7S1AWNZ3P2ivhXkDhBhmARtmIwgCwzCbCaHAHG4Bl1cAQ0ghh1t17971I8D616JY5O5dNDk1aXeMG1vyTvn5pCEMOgiCTBgprG5oaLjd3t5+r6urq0kgqhVV8cu5N++GAR+8arANf2faOmG328wGs2nAkYdPRriF+dzKyqbBp4MPH/f1PXzYc7ur81ZVaSHCooF0RuVdL8+3X8rnrQDSp6yOAWkFzGZXaIbsk35Y/4x7jwYHex4/Hbvf2lApEAgqK/mVgip+Ka+87X7fw8fPLgCbZ/U/3w5g00dHxRSouqW5jgOpp+6E5hzyCuzsezT2pKutvf0Wny8U8lGPqiqhUCRsbW263fDjIG52Em+67U/Pu6aro0jNAyadziK5Is+6el1zx/uiqHHs6SNXHJ33x8YG23u6aoXCKpGAh7DB7LwAALfuucH7QNHUqJwCKY29Lgw6cQFdNuKczsLnfdv44MnTx09+fPbgevo3HE4ZwkFSiSEhkefOHPGLP+W9a+WMwY5gp3OAUqYwGAeMJpOhV29US2tUNvNoMIA74Bt8IvB05OmgIBL5YiYNYmWQv7lRV1Nxq+1uQ0/fkd2uPC7dWzQ1BDVaVCp1BQg36oxmvVwthnUDQ5HAoUM+/hFJqWkJVNHtWlHT/a6GBn4JF4EhBpOew352HViFGvzJb8RZXG3pNUmulKlUFZTcQkm3Tl9fbDTFAIAvGcznidp6Ho09nWFsrLOns7aqqorP5fI6nwS4v4lZuOvC9ACr12DsVUgcdrtDVcG6LDEZTHCzJQ97+mpP2/17t9p72tta0XdbQ+vtpgYRWguRqLa2lj+WBfwS84s9WdOKfKNJDelHreNWq83pqMnVG8yNZTd8cHQmt5rH5/FKSrhwIVIqKBe4VoRAUMLh8LiFcM+3wFLMkr1504oClaGg2D5unbBNWEetdqRuQFkP56fjQxCQBtLoLtA/E7OEVypAw68S5DNAdIjGkWCXYpYCzVPiCn0LZcg6butXdQ9ZrM4Ouri+4rLun0V4FuM5dDoLhlm88vJy1EEgEuYzGCw2szQPWI75nd+og1tvKC52jI4XXwEpBfqRgZZcsbobkkz+HZ/BdKlBBoLwhejUXS90KfLYqPxS8qWTuK3zMH8+NWUGpZpcid0upqiNahDpkMtb1HpLaYVzxC8ZDYGJ5JcIhUIB+kGTxy8v4TCZ1NTwwwd8sID7UsyW+Cl5oVJ6RW+zFUjMvYbqXLmyQ64xmGuKHY7gRDaDUVpbK0K1leV8dA0UskDapYiI0NCTZyOi04sCPTCfxU9XVw/oclUTFqZSI1NUQ3K5Wq03aIvrHc6wGBidLBfh8OAC1kwqaGlxpIiIiKjoaCKReLYv0ROzPX664qZZX5xvMuY3aKSKeopMLlNoVAqO3mYNdhnQX4AaQBnkpISEJHJKWloy+WIKU437BLMrflrMNRuUiGRYW6iQyfNhhUajlHc0c8at5uAABgtivAKd4WpwEJPJQmFwH/qtxnjGT/VDWlVHmQQViI1SVb9MKkenUFDnHNJcAPDknFccoOffISZEzcymMsDOQDfMZ2FOG1Kn6agvs49YJ6wjlvHeDq6suwOUOEaGInHhGaiB65EuIJCOXhgM2sWk83FxqRD7EnY15mPv/skaTrdaQ1ePjg8PWxVaczfYqNaCKpvz+/0hbBYE0amZaWkXUzNTkuLOJ6WQqUx6djadyUKQfMLun2EW770x1U9Ra2XVoNpmGLYaFcqCYnm3ia6yTcX7sGAmg0YmuVJOJEVHk+JSLmXSqTk51GxyzOkQgqstznOPnxyGObIKRdnlRtOwQcKhMHTdSiWl3zYZ6ROTmhF9nBiLSokRoUHHwsmpZLSIRLSI4SdDDwFui139wFs5LivmNMo7xBR6YW4uXK1V9upv0qwTQ1HoPkU4fPhoaEQ0Kg86fvx4eFBQRPQMpNgEf3QCKCuAa045NUUmVQ9oa8rEBqPGoFbIKBL7ZBZwgHDoWETUSVRDJMW+gBT9woF0cNvzprrJ79q5ZAhSGXqN6g6doVet0MsoTMv49wDhPDEqjkR6qZmBSJy5khJO+sy29S9wR4tUNK7ZZFBJ1Tp1t1yay9FLpQd9Ykmk17QzSjI5CjVJivLH7Zjd5pfhAtDCQ+xmnVqhNSqVzS1ym/1BPBAe91IVO1MHlKgEBlpIKhiD2/ne/Jdb22/3+eVZtGIeHUZbFTO3eshiGTf64lzZj45zhUymZqZmZmSmnU9Oo7IZ2cmJIcAfF7x2tPjNvrDvRof7a+hwo7y+xtn4QBuAO4uGHxsXl0GlUiEGNTUxJiY5I/lMgC/eCwD2/OFV+bxFyz9a/8X+C83Of0yODg+3pIivJh4BCP4Egv/RY4EnQgJ8D+LQkweKF/CcPbv3bd+4ZsU7M0eEJau/fDGMC/76a+kPqiwc2moArBcWC/wEm5e5DN5ZtuHzXXtmx7A43E/q0Ai+ct+yftWSf2dx/qIly1Z+vHbDZredHp67PFHQ2ws8PTx27nTfsd3t8083/2XDujUfrnh38aK33piV/gvggxto0ucPOgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 500,
            dps: 176.47,
            speed: 25,
            range: 75,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 13000,
            actualAp: 3250,
            actualDps: 1147.06,
            magnification: "650%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1382Data;

