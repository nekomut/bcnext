import { GatyaSet } from "@/data/gatyasets";

export const E41: GatyaSet = {
  name: "ねこなつパラダイス編（伝説の札束）",
  guaranteed: 1,
  shortName: "e41",
  gatyasetId: 41,
  rateCumSum: [1000, 6000, 9000, 10000],
  pools: [
    {
      rate: 1000,
      units: [
       'XP 5,000',              //  10
       'XP 2,000',              // 222
      ],
      reroll: false,
    },
    {
      rate: 5000,
      units: [
       'スピードアップ*',       //   0
       'ニャンピュータ*',       //   3
       'XP 10,000*',            //  11
       'XP 25,000*',            // 223
      ],
      reroll: true,
    },
    {
      rate: 3000,
      units: [
       'ネコボン',              //   2
       'おかめはちもく',        //   4
       'スニャイパー',          //   5
      ],
      reroll: false,
    },
    {
      rate: 1000,
      units: [
       'にゃんこバーガー',      // 213
       'ネコまねき',            // 342
       '100万ドルのネコ',       // 635
       'ネココンサルタント',    // 822
      ],
      reroll: false,
    },
  ],

};
