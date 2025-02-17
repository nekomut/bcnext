import { GatyaSet } from "@/data/gatyasets";

export const NyankoGatyaSet: GatyaSet = {
  name: "にゃんこ",
  shortName: "n",
  gatyasetId: 0,
  rateCumSum: [10000],
  pools: [
    {
      rate: 10000,
      units: [                // id  i
        "ネコ",               //  0  0
        "タンクネコ",         //  1  1
        "バトルネコ",         //  2  2
        "キモネコ",           //  3  3
        "ウシネコ",           //  4  4
        "ネコノトリ",         //  5  5
        "ネコフィッシュ",     //  6  6
        "ネコトカゲ",         //  7  7
        "巨神ネコ",           //  8  8
        "にゃんこ砲攻撃力",   //  0  9
        "にゃんこ砲チャージ", //  2 10
        "働きネコ仕事効率",   //  3 11
        "働きネコお財布",     //  4 12
        "お城体力",           //  5 13
        "研究力",             //  6 14
        "会計力",             //  7 15
        "勉強力",             //  8 16
        "統率力",             //  9 17
      ],
      reroll: true,
    },
  ],
};
