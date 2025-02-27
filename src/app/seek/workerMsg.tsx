import { GatyaSet } from "@/data/gatyasets";

type WorkerInitializationMessage = {
  rolls: number[];
  gatyasetRateCumSum: number[];
  gatyasetUnits: number[][];
  gatyasetRerollablePools: number[];
};

export const generateWorkerInitializationMessage = ({
  gatyaset,
  rolls,
}: {
  gatyaset: GatyaSet;
  rolls: string[];
}): WorkerInitializationMessage => {
  // To speed up computation, convert each unit to a numberic value
  const allUnits = gatyaset.pools.flatMap((pool) => pool.units);
  const poolsNumeric = gatyaset.pools.map((pool) =>
    pool.units.map((unit) => allUnits.indexOf(unit))
  );
  const rerollablePools = gatyaset.pools.flatMap((pool, i) =>
    pool.reroll ? [i] : []
  );
  const rollsNumeric = rolls.map((roll) => allUnits.indexOf(roll));

  // Sanitize
  if (poolsNumeric.length !== gatyaset.rateCumSum.length) {
    throw new Error(
      "Number of pools and number of cumulative rates do not match"
    );
  }
  if (rollsNumeric.includes(-1)) {
    throw new Error("Rolls contains units not in the gatyaset");
  }

  return {
    gatyasetRateCumSum: gatyaset.rateCumSum,
    gatyasetUnits: poolsNumeric,
    gatyasetRerollablePools: rerollablePools,
    rolls: rollsNumeric,
  };
};