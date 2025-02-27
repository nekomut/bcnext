const xorShift32 = (seed) => {
  seed ^= seed << 13;
  seed = seed >>> 0; // Convert to 32bit unsigned integer
  seed ^= seed >>> 17;
  seed ^= seed << 15;
  seed = seed >>> 0; // Convert to 32bit unsigned integer
  return seed;
};

const getRarity = ({ seed, rateCumSum }) => {
  const seedMod = seed % 10000;
  return rateCumSum.findIndex((sum) => seedMod < sum);
};

const getUnit = ({ seed, rarity, gatyasetUnits, removedIndex = -1 }) => {
  const units = gatyasetUnits[rarity];
  let seedMod;
  if (removedIndex === -1) {
    seedMod = seed % units.length;
  } else {
    seedMod = seed % (units.length - 1);
    if (seedMod >= removedIndex) {
      seedMod++;
    }
  }
  return [seedMod, units[seedMod]];
};

const check = ({
  seed,
  rolls,
  gatyasetRateCumSum,
  gatyasetUnits,
  gatyasetRerollablePools,
}) => {
  let lastRoll = -1;
  for (const userRoll of rolls) {
    seed = xorShift32(seed);
    const rarity = getRarity({ seed, rateCumSum: gatyasetRateCumSum });

    seed = xorShift32(seed);
    const [unitIndex, unitId] = getUnit({ seed, rarity, gatyasetUnits });
    if (unitId === lastRoll && gatyasetRerollablePools.includes(rarity)) {
      seed = xorShift32(seed);
      const [, rerolledUnitId] = getUnit({
        seed,
        rarity,
        gatyasetUnits,
        removedIndex: unitIndex,
      });
      if (userRoll !== rerolledUnitId) {
        return false;
      }
      lastRoll = rerolledUnitId;
    } else {
      if (userRoll !== unitId) {
        return false;
      }
      lastRoll = unitId;
    }
  }

  return true;
};

const searchRange = (data) => {
  const {
    workerNumber,
    startSeed,
    endSeed,
    rolls,
    gatyasetRateCumSum,
    gatyasetUnits,
    gatyasetRerollablePools,
  } = data;

  const oneTenthBlock = (endSeed - startSeed) / 10;
  let percentageSearched = 0;
  let outputBreakpoint = startSeed + oneTenthBlock;

  for (let seed = startSeed; seed < endSeed; seed++) {
    if (seed >= outputBreakpoint) {
      percentageSearched += 10;
      postMessage({
        type: "progress",
        percentageSearched: percentageSearched,
      });
      outputBreakpoint += oneTenthBlock;
    }
    const seedIsValid = check({
      seed,
      rolls,
      gatyasetRateCumSum,
      gatyasetUnits,
      gatyasetRerollablePools,
    });
    if (seedIsValid) {
      postMessage({
        type: "seedFound",
        seed: seed,
        workerNumber: workerNumber,
      });
    }
  }
};

onmessage = (e) => {
  searchRange(e.data);
  postMessage({
    type: "progress",
    percentageSearched: 100,
  });
};