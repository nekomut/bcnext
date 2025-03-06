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

const generateRolls = (seed: number, numRolls: number, gatyaset: GatyaSet, lastCat: string, track: "A" | "B") => {

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
      let raritySeed = roll.raritySeed;
      let rerollSeed = unitSeed;
      let rerollUnitIndex = unitIndex;
      let rerollUnitName = unitName;
      const rerollRemovedIndices = [unitIndex];
      let rerollTimes = 0;
      const rerolls = [];

      rerollTimes++;
      raritySeed = xorShift32(raritySeed);
      rerollSeed = xorShift32(rerollSeed);
      const [nextUnitIndex, nextUnitName] = getUnit({
        seed: rerollSeed,
        units: gatyaset.pools[rarity].units,
        removedIndices: rerollRemovedIndices,
      });
      rerollUnitIndex = nextUnitIndex;
      rerollUnitName = nextUnitName;
      rerollRemovedIndices.push(nextUnitIndex);
      rerolls.push({
        raritySeed: xorShift32(roll.raritySeed),
        unitIndex: rerollUnitIndex,
        unitName: rerollUnitName,
        unitSeed: rerollSeed,
      })

      if (rerollUnitName === unitName) {
        rerollTimes++;
        raritySeed = xorShift32(raritySeed);
        rerollSeed = xorShift32(rerollSeed);
        const [nextUnitIndex, nextUnitName] = getUnit({
          seed: rerollSeed,
          units: gatyaset.pools[rarity].units,
          removedIndices: [],
        });
        rerollUnitIndex = nextUnitIndex;
        rerollUnitName = nextUnitName;
        rerollRemovedIndices.push(nextUnitIndex);
        rerolls.push({
          raritySeed: raritySeed,
          unitIndex: rerollUnitIndex,
          unitName: rerollUnitName,
          unitSeed: rerollSeed,
        })
      }

      roll.unitIfDupe = {
        raritySeed: raritySeed,
        unitIndex: rerollUnitIndex,
        unitName: rerollUnitName,
        unitSeed: rerollSeed,
        rerolledTimes: rerollTimes,
        rerolls: rerolls,
      };
    }
    rolls.push(roll);
  }

  return rolls;
};

export const GenerateAllRolls = (seed: number, numRolls: number, gatyasets: GatyaSet[], lastCat: string) => {

  const allRolls = gatyasets.map((gatyaset) => ({
    gatyasetName: gatyaset.name,
    gatyasetShortName: gatyaset.shortName,
    gatyasetId: gatyaset.gatyasetId,
    gatyasetGuaranteed: gatyaset.guaranteed,
    trackA: generateRolls(seed, numRolls, gatyaset, lastCat, "A"),
    trackB: generateRolls(xorShift32(seed), numRolls, gatyaset, lastCat, "B"),
  }));

  // レア被り処理
  allRolls.forEach(({ trackA, trackB }) => {
    const cellsWithDupeTrackSwitches: number[] = [];
    const findCellsWithDupeTrackSwitches = (lastCat: string, track: Roll[]) => {
      track.forEach((roll) => {
        if (roll.unitIfDupe && roll.unitIfDistinct.unitName === lastCat) {
          cellsWithDupeTrackSwitches.push(roll.raritySeed);
        }
        lastCat = roll.unitIfDistinct.unitName;
      });
    };
    findCellsWithDupeTrackSwitches(lastCat, trackA);
    findCellsWithDupeTrackSwitches("", trackB);

    cellsWithDupeTrackSwitches.forEach((raritySeed) => {
      const findCell = (raritySeed: number) =>
        trackA.find((roll) => roll.raritySeed === raritySeed) ||
        trackB.find((roll) => roll.raritySeed === raritySeed);

      let sourceCell = findCell(raritySeed)!;
      let prevUnit = sourceCell.unitIfDistinct.unitName;

      while (sourceCell.unitIfDistinct.unitName === prevUnit) {
        prevUnit = sourceCell.unitIfDupe!.unitName;
        const destinationRaritySeed = xorShift32(
          sourceCell.unitIfDupe!.unitSeed
        );
        const destinationCell = findCell(destinationRaritySeed);
        if (!destinationCell) {
          break;
        };
        if (cellsWithDupeTrackSwitches.includes(sourceCell.raritySeed)) {
          sourceCell.dupeInfo = {
            showDupe: true,
            targetCellId: findCell(destinationRaritySeed)?.cellId || "",
            targetWillRerollAgain:
              sourceCell.unitIfDupe!.unitName ===
              destinationCell.unitIfDistinct.unitName,
          };
        };
        sourceCell = destinationCell;
      }
     });
  });
  
  // 確定処理
  // unitIfGuaranteed?: {
  //   cellId: string;
  //   unitIndex: number;
  //   unitName: string;
  //   unitSeed: number;
  //   targetCellId: string;
  // };
  allRolls.forEach((rolls) => {
    if (rolls.gatyasetGuaranteed !== undefined && rolls.gatyasetGuaranteed > 0) {

      const findCell = (raritySeed: number) =>
        rolls.trackA.find((roll) => roll.raritySeed === raritySeed) ||
        rolls.trackB.find((roll) => roll.raritySeed === raritySeed);

      for (const track of [rolls.trackA, rolls.trackB]) { 

        let guaranteedRoll = findCell(track[track.length-1].unitIfDistinct.unitSeed);

        track.some((roll, i: number) => {
          if (i < (numRolls+2)) {
            const seed: number = roll.raritySeed;
            const cell: Roll | undefined = findCell(seed);
            if (!cell) {
              return true;
            }

            // 確定枠
            if (!cell!.dupeInfo?.showDupe) {
              guaranteedRoll = findCell(cell!.raritySeed);
              // } else {
              //   guaranteedRoll = findCell(cell!.unitIfDupe!.raritySeed);
            }
            // roll.unitIfGuaranteed追加
            const unitSeed = guaranteedRoll?.unitIfDistinct.unitSeed;
            if (unitSeed !== undefined) {
              const gatyaset = gatyasets.find((gatyaset) => gatyaset.gatyasetId === rolls.gatyasetId);
              if (gatyaset) {
                const [unitIndex, unitName] = getUnit({
                  seed: unitSeed,
                  units: gatyaset.pools[3].units,
                });
                roll.unitIfGuaranteed = {
                  cellId: guaranteedRoll?.cellId || "",
                  unitIndex,
                  unitName,
                  unitSeed,
                  targetCellId: findCell(xorShift32(guaranteedRoll?.unitIfDistinct?.unitSeed ?? 0))?.cellId || "",
                };
              }
            };
          } else {
            return true;
          }
        });

      };

    };
  });

  return allRolls;
};
