'use client'

import { GatyaSet } from "@/data/gatyasets";

export type Roll = {
  cellId: string;
  rarity: number;
  raritySeed: number;
  unitIfDistinct: {
    unitIndex: number;
    unitName: string;
    unitSeed: number;
  };
  unitIfDupe?: {
    raritySeed: number;
    unitIndex: number;
    unitName: string;
    unitSeed: number;
    rerolledTimes: number;
    rerolls?: {
      raritySeed: number;
      unitIndex: number;
      unitName: string;
      unitSeed: number;
    }[];
  };
  unitIfGuaranteed?: {
    cellId: string;
    unitIndex: number;
    unitName: string;
    unitSeed: number;
    targetCellId: string;
  };
  dupeInfo?: {
    showDupe: boolean;
    targetCellId: string;
    targetWillRerollAgain: boolean;
  };
};

export const xorShift32 = (seed: number) => {
  seed ^= seed << 13;
  seed = seed >>> 0; // Convert to 32bit unsigned integer
  seed ^= seed >>> 17;
  seed ^= seed << 15;
  seed = seed >>> 0; // Convert to 32bit unsigned integer
  return seed;
};

const getRarity = ({
  seed,
  rateCumSum,
}: {
  seed: number;
  rateCumSum: number[];
}) => {
  const seedMod = seed % 10000;
  return rateCumSum.findIndex((sum) => seedMod < sum);
};

const getUnit = ({
  seed,
  units,
  removedIndices = [],
}: {
  seed: number;
  units: string[];
  removedIndices?: number[];
}): [number, string] => {
  if (removedIndices.length === 0) {
    const seedMod = seed % units.length;
    return [seedMod, units[seedMod]];
  } else {
    const numUnitsInPool = units.length - removedIndices.length;
    const seedMod = seed % numUnitsInPool;
    const numRemovedIndicesBeforeSeedMod = removedIndices.filter(
      (index) => index <= seedMod
    ).length;
    const rerolledSeedMod = seedMod + numRemovedIndicesBeforeSeedMod;
    // Return the original seedMod as the index to eliminate, but the cat from rerolledSeedMod
    return [seedMod, units[rerolledSeedMod]];
  }
};

export const generateRollsLightweight = (
  seed: number,
  numRolls: number,
  gatyaset: GatyaSet
): [number, boolean] => {
  let lastRoll = "";
  let finalRollSeed = 0;
  let finalRollIsReroll = false;
  // Roll to numRolls + 1 to check if the next one is a rare dupe, but return the seed at numRolls
  for (let i = 0; i < numRolls + 1; i++) {
    if (i === numRolls) {
      finalRollSeed = seed;
    }
    seed = xorShift32(seed);
    const rarity = getRarity({ seed, rateCumSum: gatyaset.rateCumSum });

    seed = xorShift32(seed);
    const [unitId, unitName] = getUnit({ seed,
      units: gatyaset.pools[rarity].units,
    });
    if (unitName === lastRoll && gatyaset.pools[rarity].reroll) {
      if (i === numRolls) {
        finalRollIsReroll = true;
      }
      seed = xorShift32(seed);
      const [, rerolledUnitName] = getUnit({
        seed,
        units: gatyaset.pools[rarity].units,
        removedIndices: [unitId],
      });
      lastRoll = rerolledUnitName;
    } else {
      lastRoll = unitName;
    }
  }

  return [finalRollSeed, finalRollIsReroll];
};
