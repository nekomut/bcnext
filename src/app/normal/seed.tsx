'use client'
import { useSearchParams } from 'next/navigation';
import { GatyaSet, NormalGatyaSetList } from "@/data/gatyasets";
import { DEFAULTS } from './constants';

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
    unitIndex: number;
    unitName: string;
    unitSeed: number;
    rerolledTimes: number;
  };
  dupeInfo?: {
    showDupe: boolean;
    targetCellId: string;
    targetWillRerollAgain: boolean;
  };
  // highlight?: {
  //   isLast?: boolean;
  //   top: boolean;
  //   bottom: boolean;
  // };
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

// export const generateRollsLightweight = (
//   seed: number,
//   numRolls: number,
//   gatyaset: GatyaSet
// ): [number, boolean] => {
//   let lastRoll = "";
//   let finalRollSeed = 0;
//   let finalRollIsReroll = false;
//   // Roll to numRolls + 1 to check if the next one is a rare dupe, but return the seed at numRolls
//   for (let i = 0; i < numRolls + 1; i++) {
//     if (i === numRolls) {
//       finalRollSeed = seed;
//     }
//     seed = xorShift32(seed);
//     const rarity = getRarity({ seed, rateCumSum: gatyaset.rateCumSum });
// 
//     seed = xorShift32(seed);
//     let [unitId, unitName] = getUnit({ seed,
//       units: gatyaset.pools[rarity].units,
//     });
//     if (unitName === lastRoll && gatyaset.pools[rarity].reroll) {
//       if (i === numRolls) {
//         finalRollIsReroll = true;
//       }
//       seed = xorShift32(seed);
//       const [_, rerolledUnitName] = getUnit({
//         seed,
//         units: gatyaset.pools[rarity].units,
//         removedIndices: [unitId],
//       });
//       lastRoll = rerolledUnitName;
//     } else {
//       lastRoll = unitName;
//     }
//   }
// 
//   return [finalRollSeed, finalRollIsReroll];
// };

const generateRolls = (seed: number, numRolls: number, gatyaset: GatyaSet, track: "A" | "B") => {

  const rolls: Roll[] = [];
  // let lastRoll = "";
  for (let i = 0; i < numRolls; i++) {
    const roll = {} as Roll;

    // Calculate rarity
    seed = xorShift32(seed);
    const raritySeed = seed;
    const rarity = getRarity({
      seed: raritySeed,
      rateCumSum: gatyaset.rateCumSum,
    });
    roll.cellId = `${i+1}${track}`;
    roll.raritySeed = raritySeed;
    roll.rarity = rarity;
    
    // Calculate unit if the previous unit was distinct
    seed = xorShift32(seed);
    const unitSeed = seed;
    const [unitIndex, unitName] = getUnit({
      seed: unitSeed,
      units: gatyaset.pools[rarity].units,
    });
    roll.unitIfDistinct = {
      unitIndex,
      unitName,
      unitSeed,
    };

    // Calculate unit if the previous unit was a dupe
    if (gatyaset.pools[rarity].reroll) {
      // Here we clone the seed since we don't actually want to reroll
      let rerollSeed = unitSeed;
      let rerollUnitIndex = unitIndex;
      let rerollUnitName = unitName;
      const rerollRemovedIndices = [unitIndex];
      let rerollTimes = 0;
      // Reroll until we get something different from the canonical roll
      while (rerollUnitName === unitName) {
        rerollTimes++;
        rerollSeed = xorShift32(rerollSeed);
        const [nextUnitIndex, nextUnitName] = getUnit({
          seed: rerollSeed,
          units: gatyaset.pools[rarity].units,
          removedIndices: rerollRemovedIndices,
        });
        rerollUnitIndex = nextUnitIndex;
        rerollUnitName = nextUnitName;
        rerollRemovedIndices.push(nextUnitIndex);
      }
      roll.unitIfDupe = {
        unitIndex: rerollUnitIndex,
        unitName: rerollUnitName,
        unitSeed: rerollSeed,
        rerolledTimes: rerollTimes,
      };
    }
    // lastRoll = roll.unitIfDistinct.unitName;
    rolls.push(roll);
  }

  return rolls;
};

export const GenerateAllRolls = (seed: number, numRolls: number) => {

  const searchParams = useSearchParams();
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };

  const selectedGatyaSets = getQueryParam("gatyasets")?.split(",") || DEFAULTS.gatyasets.split(",");
  const gatyasets = NormalGatyaSetList.filter((gatyaset) =>
    selectedGatyaSets.includes(gatyaset.shortName)
  );

  return gatyasets.map((gatyaset) => ({
    gatyasetName: gatyaset.name,
    gatyasetShortName: gatyaset.shortName,
    gatyasetId: gatyaset.gatyasetId,
    trackA: generateRolls(seed, numRolls, gatyaset, "A"),
    trackB: generateRolls(xorShift32(seed), numRolls, gatyaset, "B"),
  }));
};
