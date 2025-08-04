import { GatyaSet } from "@/data/gatyasets";

export const E40: GatyaSet = {
  name: "ねこなつサバイバル編（伝説の罠）",
  guaranteed: 1,
  shortName: "e40",
  gatyasetId: 40,
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
       'タスマニアオオガニ',    // 813
       'N206ネコホタテ',        // 765
       'イワシ',                // 766
       'イカ',                  // 767
      ],
      reroll: false,
    },
  ],

};
