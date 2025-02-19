import { GatyaSet } from "@/data/gatyasets";

export const FukubikiGGatyaSet: GatyaSet = {
  name: "福引G",
  shortName: "g",
  gatyasetId: 63,
  rateCumSum: [0, 5100, 8600, 10000],
  pools: [
    {
      rate: 0,
      units: [],
      reroll: false,
    },
    {
      rate: 5100,
      units: [
        "ネコビタンA*",  // 55
        "ネコビタンA*",  // 55
        "ネコビタンA*",  // 55
        "XP 100,000**",  // 78
        "XP 100,000**",  // 78
        "XP 100,000**",  // 78
      ],
      reroll: true,
    },
    {
      rate: 3500,
      units: [
        "ネコビタンB",  // 56
        "ネコビタンB",  // 56
        "ネコビタンB",  // 56
        "XP 500,000",   // 19
      ],
      reroll: false,
    },
    {
      rate: 1400,
      units: [
        "ネコビタンC",   // 57
        "ネコビタンC",   // 57
        "ネコビタンC",   // 57
        "XP 1,000,000",  // 17
      ],
      reroll: false,
    },
  ],
};
