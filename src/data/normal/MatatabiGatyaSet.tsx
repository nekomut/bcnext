import { GatyaSet } from "@/data/gatyasets";

export const MatatabiGatyaSet: GatyaSet = {
  name: "マタタビ",
  shortName: "m",
  gatyasetId: 3,
  rateCumSum: [400, 2400, 9400, 10000],
  pools: [
    {
      rate: 400,
      units: [
        "XP 5000"             // 10
      ],
      reroll: false,
    },
    {
      rate: 2000,
      units: [
        "スピードアップ*",    //  0
        "ニャンピュータ*",    //  3
        "XP 10,000*",         // 11
        "XP 30,000*",         // 12
        "XP 50,000*",         // 13
        "紫マタタビの種*",    // 30
        "赤マタタビの種*",    // 31
        "青マタタビの種*",    // 32
        "緑マタタビの種*",    // 33
        "黄マタタビの種*",    // 34
      ],
      reroll: true,
    },
    {
      rate: 7000,
      units: [
        "ネコボン",           //  2
        "おかめはちもく",     //  4
        "スニャイパー",       //  5
        "XP 100,000",         // 14
        "XP 200,000",         // 15
        "紫マタタビ",         // 35
        "赤マタタビ",         // 36
        "青マタタビ",         // 37
        "緑マタタビ",         // 38
        "黄マタタビ",         // 39
      ],
      reroll: false,
    },
    {
      rate: 600,
      units: [
        "トレジャーレーダー", //  1
        "XP 500,000",         // 16
        "虹マタタビ",         // 40
      ],
      reroll: false,
    },
  ],
};
