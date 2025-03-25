import { GatyaSet } from "@/data/gatyasets";

export const E39: GatyaSet = {
  name: "刃牙(伝説のダンベル)",
  guaranteed: 1,
  shortName: "e39",
  gatyasetId: 39,
  rateCumSum: [1000, 5500, 8000, 10000],
  pools: [
    {
      rate: 1000,
      units: [
       'XP 5000',               //  10
      ],
      reroll: false,
    },
    {
      rate: 4500,
      units: [
       'スピードアップ',        //   0
       'ニャンピュータ',        //   3
       'XP 10000',              //  11
       'XP 30000',              //  12
      ],
      reroll: true,
    },
    {
      rate: 2500,
      units: [
       'ネコボン',              //   2
       'おかめはちもく',        //   4
       'スニャイパー',          //   5
       'XP 100000',             //  14
      ],
      reroll: false,
    },
    {
      rate: 2000,
      units: [
       'ネコ刃牙',              // 796
       'ネコ海王',              // 797
       'ネコ独歩',              // 798
      ],
      reroll: false,
    },
  ],

};

