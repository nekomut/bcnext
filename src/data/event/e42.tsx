import { GatyaSet } from "@/data/gatyasets";

export const E42: GatyaSet = {
  name: "1.1億イベント（伝説のきらめき）",
  guaranteed: 1,
  shortName: "e42",
  gatyasetId: 42,
  rateCumSum: [1000, 6000, 9000, 10000],
  pools: [
    {
      rate: 1000,
      units: [
       'XP 5,000',              //  10
      ],
      reroll: false,
    },
    {
      rate: 5000,
      units: [
       'スピードアップ*',       //   0
       'ニャンピュータ*',       //   3
       'XP 10,000*',            //  11
       'XP 30,000*',            //  12
      ],
      reroll: true,
    },
    {
      rate: 3000,
      units: [
       'ネコボン',              //   2
       'おかめはちもく',        //   4
       'スニャイパー',          //   5
       'XP 100,000',            //  14
      ],
      reroll: false,
    },
    {
      rate: 1000,
      units: [
       '記念ネコ',              // 375
       'ねこ農家',              // 381
       '石の上にも10年ネコ',    // 689
      ],
      reroll: false,
    },
  ],

};
