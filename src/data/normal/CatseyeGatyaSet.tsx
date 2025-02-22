import { GatyaSet } from "@/data/gatyasets";

export const CatseyeGatyaSet: GatyaSet = {
  name: "猫目",
  shortName: "c",
  gatyasetId: 65,
  rateCumSum: [500, 7400, 9400, 9900, 10000],
  pools: [
    {
      rate: 500,
      units: [
        "XP 5,000"      // 10
      ],
      reroll: false,
    },
    {
      rate: 6900,
      units: [
        "XP 10,000*",   // 11
        "XP 30,000*",   // 12
        "EX猫目*",      // 50
        "レア猫目*",    // 51
      ],
      reroll: true,
    },
    {
      rate: 2000,
      units: [
        "XP 100,000",   // 14
        "激レア猫目",   // 52
      ],
      reroll: false,
    },
    {
      rate: 500,
      units: [
        "超激レア猫目", // 53
      ],
      reroll: false,
    },
    {
      rate: 100,
      units: [
        "闇猫目",       // 58
      ],
      reroll: false,
    },
  ],
};
