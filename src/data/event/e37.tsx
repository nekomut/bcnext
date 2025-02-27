import { GatyaSet } from "@/data/gatyasets";

export const E37: GatyaSet = {
  name: "にゃんこ学園",
  guaranteed: 0,
  shortName: "e37",
  gatyasetId: 37,
  rateCumSum: [1000, 6000, 8500, 10000],
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
      rate: 2500,
      units: [
       'ネコボン',              //   2
       'おかめはちもく',        //   4
       'スニャイパー',          //   5
       'XP 100,000',            //  14
      ],
      reroll: false,
    },
    {
      rate: 1500,
      units: [
       '幼馴染にゃん子',        // 650
       'おてんばネコライオン',  // 651
       'ネコクバンケシ',        // 652
       'ネコ委員長',            // 696
      ],
      reroll: false,
    },
  ],

};

