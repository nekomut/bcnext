import { GatyaSet } from "@/data/gatyasets";

export const FukubikiGatyaSet: GatyaSet = {
  name: "福引",
  shortName: "f",
  gatyasetId: 62,
  rateCumSum: [0, 7400, 9500, 10000],
  pools: [
    {
      rate: 0,
      units: [],
      reroll: false,
    },
    {
      rate: 7400,
      units: [
        "ちび巨神ネコ",       // 313
        "ちびネコトカゲ",     // 312
        "ちびネコフィッシュ", // 311
        "ちびネコノトリ",     // 247
        "ちびウシネコ",       // 246
        "ちびキモネコ",       // 245
        "ちびバトルネコ",     // 211
        "ちびタンクネコ",     // 210
        "ちびネコ",           // 209
        "スピードアップ",     //   0
        "スピードアップ",     //   0
        "スピードアップ",     //   0
        "ニャンピュータ",     //   3
        "ニャンピュータ",     //   3
        "XP 10,000*",         //  11
        "XP 10,000*",         //  11
        "XP 10,000*",         //  11
        "XP 30,000*",         //  12
        "XP 30,000*",         //  12
        "XP 30,000*",         //  12
      ],
      reroll: true,
    },
    {
      rate: 2100,
      units: [
        "ネコボン",           //   2
        "おかめはちもく",     //   4
        "スニャイパー",       //   5
      ],
      reroll: false,
    },
    {
      rate: 500,
      units: [
        "トレジャーレーダー", //   1
      ],
      reroll: false,
    },
  ],
};
