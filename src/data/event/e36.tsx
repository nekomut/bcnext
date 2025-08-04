import { GatyaSet } from "@/data/gatyasets";

export const E36: GatyaSet = {
  name: "春節イベント（伝説の縁起物）",
  guaranteed: 1,
  shortName: "e36",
  gatyasetId: 36,
  rateCumSum: [1000, 6000, 9000, 10000],
  pools: [
    {
      rate: 1000,
      units: [
       'XP 5,000', //  10
      ],
      reroll: false,
    },
    {
      rate: 5000,
      units: [
       'スピードアップ*', //   0
       'ニャンピュータ*', //   3
       'XP 10,000*',      //  11
       'XP 30,000*',      //  12
      ],
      reroll: true,
    },
    {
      rate: 3000,
      units: [
       'ネコボン',        //   2
       'おかめはちもく',  //   4
       'スニャイパー',    //   5
       'XP 100,000',      //  14
      ],
      reroll: false,
    },
    {
      rate: 1000,
      units: [
       'N204ねこシシマイ', // 730
       '爆竹ネコ',         // 646
       'ネコ小籠包',       // 202
      ],
      reroll: false,
    },
  ],

};

