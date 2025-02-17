import { GatyaSet } from "@/data/gatyasets";

export const NyankoPlusGatyaSet: GatyaSet = {
  name: "にゃんこ＋",
  shortName: "p",
  gatyasetId: 64,
  rateCumSum: [10000],
  pools: [
    {
      rate: 10000,
      units: [                //  id   i
        "ネコ",               //   0   0
        "タンクネコ",         //   1   1
        "バトルネコ",         //   2   2
        "キモネコ",           //   3   3
        "ウシネコ",           //   4   4
        "ネコノトリ",         //   5   5
        "ネコフィッシュ",     //   6   6
        "ネコトカゲ",         //   7   7
        "巨神ネコ",           //   8   8
        "ネコ超人",           // 643   9
        "にゃんこ砲攻撃力",   //   0  10
        "にゃんこ砲チャージ", //   2  11
        "働きネコ仕事効率",   //   3  12
        "働きネコお財布",     //   4  13
        "お城体力",           //   5  14
        "研究力",             //   6  15
        "会計力",             //   7  16
        "勉強力",             //   8  17
        "統率力",             //   9  18
      ],
      reroll: true,
    },
  ],
};
