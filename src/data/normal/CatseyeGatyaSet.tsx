import { GatyaSet } from "@/data/gatyasets";

export const CatseyeGatyaSet: GatyaSet = {
  name: "キャッツアイ",
  shortName: "c",
  gatyasetId: 65,
  rateCumSum: [500, 7400, 9400, 9900, 10000],
  pools: [
    {
      rate: 500,
      units: [
        "XP 5000" // 10
      ],
      reroll: false,
    },
    {
      rate: 6900,
      units: [
        "XP 10000",             // 11
        "XP 30000",             // 12
        "キャッツアイ【EX】",   // 50
        "キャッツアイ【レア】", // 51
      ],
      reroll: true,
    },
    {
      rate: 2000,
      units: [
        "XP 100000",              // 14
        "キャッツアイ【激レア】", // 52
      ],
      reroll: false,
    },
    {
      rate: 500,
      units: [
        "キャッツアイ【超激レア】", // 53
      ],
      reroll: false,
    },
    {
      rate: 100,
      units: [
        "キャッツアイ【闇】", // 58
      ],
      reroll: false,
    },
  ],
};
