// Unit 343 Data (level-independent)
import type { UnitData } from '../../app/unit/types';

export const unit343Data: UnitData = {
  unitId: 343,
  coreData: {
    forms: [
    {
      formId: 0,
      name: "なめネコ",
      stats: [600, 2, 12, 60, 80, 210, 420, 480, 0, 320, 1, 0, 1, 27, 0, 9, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 100, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      icon: "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAAwFBMVEUA/wAAAAAGBgYODg4VFRUdHR0lJSUsLCwzMzM6OjpAQEBJSUlOTk5WVlZbW1tiYmJpaWlubm51dXV7e3uAgICFhYWJiYmQkJCVlZWZmZmgoKCmpqatra2ysrK1tbW5ubm/v7/Dw8PGxsbJycnMzMzR0dHU1NTW1tbY2Nja2trc3Nzd3d3f39/g4ODi4uLk5OTm5ubo6Ojq6urs7Ozu7u7v7+/y8vL09PT19fX39/f5+fn6+vr8/Pz9/f3+/v7///9fY7njAAAAQHRSTlMA////////////////////////////////////////////////////////////////////////////////////EyueMQAACFxJREFUeJztWol2qsoSvQWIGscMmqiJMc4DQQUBBbX//69eVTeIehwIHnPfWpeddeJJK+7d1dXVVQX//JMgQYIECRIkSJAgwf8N4Ffxnxcg/csCpNgCZP8LbpZwTsBnq93p9nuINoDKGHsCKPUClAGKOFYFyPXioN/ttFufFwW0Or3eYDRG1ACekQx15MYB0gA9HGMyZMdxMBr0ep3WRQFf3f5I02eIV4A6cnVQwCyACtKSBGQgM4sDXRv1u18XBXR6I31uLizLqgDUxBI8WgEyoGxIgAp5KwYW5lwf9ToXBXQH2sy0neVy+QxQpcnKUF8GyHK3YF2AyjIGHNucaYPuRQFoANNeuZ7n4dRfGDPR3ztegDSkSUAWl8qLAXdlm2iCywLGs4XjrjebjbBAE8e8jQ80XpbxsewmDtaus5iNrwqwlh4tNAqoMIZ7ocwClMSq4F5osDjYeEsrugBke2MMXfF9dz2+bzH2AWIh7i0gh1GJb4JxcH0dNwTjHvD2GwJUCQZchhFcXwDoMzYDSMXj/5kACyTZ5TK6wfUpoBEMZKXfEIAen2FsrUjQ8i//EgfBa+wV+JmABnf/bZp7AseTcH48kL5/Q8Cr2HIPAE3/cnQBdAr0CjUm/88EVMVZhAI+/MvTMpj4JSnI/ZaADzFtX4CF3r9lbCFxT7i/gIpgfoTACXXgU9fjb4KfCaiJxUdXADXzUHrrTQTz4P4Cpp1aKZsCMXWMu34CmBK7sHdnAe+VHH8lUsq+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",
      animLength: 38
    },
    {
      formId: 1,
      name: "ネコなめ",
      stats: [600, 2, 12, 60, 80, 210, 420, 480, 0, 320, 1, 0, 1, 27, 0, 9, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 100, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      icon: "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAAwFBMVEUA/wAAAAAKBwEVDgE+KgFCLQFJMgFTOQBZPQFhQwJnRwFsSwF0UAF6VAGCWgGMYQGUZwGgbgGmcwGueQG5gAHChwHKjADOkQfQlhLSmRrTnSPVoS7XpjfZq0Hcr07etFjhu2bivm7kwXXlxX3nyYXoy4zqz5Tr0Znr1J3t1aPt2Kfu2qzv3LDx3bTx37ny4bzy4r/z48T158r16c737NX37dn479v58uH58+T79Of79+78+fH9+/b+/Pv//v3///82D82oAAAAQHRSTlMA////////////////////////////////////////////////////////////////////////////////////EyueMQAACOpJREFUeJztmoly4jgQhieZtgmEQLiPECCcBsxhc4ON3/+t9m/JHOYyDpmdrVr+VAqQjfWp1Wq1JH79euihhx566KGHHnroof+Mnv5V/d8Bnp//tgX+OsDFLqh+1er1RrPZarWSRG3HcXpEca0jpWWJCihzqkTFbaGvtHZba7VbrWazUa/XvqpXAVC/rL6tJYgaqCtDlO5uVSQqMcAnUbl7s3qA6ICg1Ww0QHAVAPU3mqhd63QBUHNsJ6LQZ38g1S8RVRkgButsC33U7+t6r9frdjStLYxQ8wFA87n6ni4AnLmiULM/dJUjqqP+OrpleLsEhUCAEXwA0AFoflfXBwMJgLpChskyzKHxRmQC4BU9IAtvkWEYI5hC17tM0KhfBRD27/b6g+EITvjlOOj1xFhoMh6DJiYN8Da+XQJiNBz0e13uhcZ1ALf+kWG8CyeE31cmU/E3maTwAQBRuKJbdsMff3HMdnAJrgM0W7J+0xjD3D3HSRN1Z3Oh2Rjdgfo1orBbdINmsxkzjGEEQdBqXgeAAXS03xxj/JPhOPCEwcJVmSgDANihuLhd88V8DgRBADdoXwdoaZ1ef4j6JxUidWWzubWlq7SMDCjS58sgWsxngmDY73W0lg8AGwD1TxFrko5jhTDiV67g/HPHWYUovAomJpiBQJjADwAeYJiT6Qzu/+k4NiptraW6cH4YwMC4WAeRSzCdmOyHPgBt9MDIgAHmOenxPBYsKXRKHiUNog8rkNaCAJ1gjNAH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",
      animLength: 38
    },
    {
      formId: 2,
      name: "Form 3",
      stats: [600, 2, 12, 60, 80, 210, 420, 480, 0, 320, 1, 0, 1, 27, 0, 9, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 100, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      icon: "",
      animLength: 30
    }
    ],
    rarity: {
      id: 2,
      name: "レア",
      maxLevels: [50, 0]
    },
    levelRates: [20, 20, 20, 20, 20, 20, 20, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  auxiliaryData: {
    names: ["なめネコ", "ネコなめ"],
    talents: {
      hasTalents: false,
      hasUltra: false,
      talentList: [

      ]
    }
  }
} as const;

export default unit343Data;

