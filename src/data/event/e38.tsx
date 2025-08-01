import { GatyaSet } from "@/data/gatyasets";

export const E38: GatyaSet = {
  name: "伝説の買い物かご",
  guaranteed: 1,
  shortName: "e38",
  gatyasetId: 38,
  rateCumSum: [1800, 6800, 9800, 10000],
  pools: [
    {
      rate: 1800,
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
      rate: 200,
      units: [
       'XP 1,000,000',          // 197
      ],
      reroll: false,
    },
  ],

};

