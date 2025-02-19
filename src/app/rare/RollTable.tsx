'use client'

import React from "react";
import { useSearchParams } from 'next/navigation';
import { Roll, xorShift32, GenerateAllRolls } from "./seed";
import { DEFAULTS } from "./constants";

export type GatyaSetTrackRolls = {
  gatyasetName: string;
  gatyasetShortName: string;
  gatyasetId: number;
  track: Roll[];
};

export const T = (arr: Array<Roll[]>) => Array(Math.min(...arr.map((a) => a.length))).fill(0).map((_, i) => arr.map((a) => a[i]));
export const zip = (arr1: Array<Roll[]>, arr2: Array<Roll[]>) => arr1.map((_, i) => [arr1[i], arr2[i]]);    

const TrackTable = ({ rollsA, rollsB }: { rollsA: GatyaSetTrackRolls[]; rollsB: GatyaSetTrackRolls[] }) => {  

  const searchParams = useSearchParams();
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };
  // const seed = parseInt(getQueryParam("seed") || DEFAULTS.seed, 10);
  const rolls = parseInt(getQueryParam("rolls") || DEFAULTS.rolls, 10);
  // const lastCat = getQueryParam("lastCat") || DEFAULTS.lastCat;
  const gatyasets = getQueryParam("gatyasets") || DEFAULTS.gatyasets;

  const zippedRolls = zip(T(rollsA.map((roll) => roll.track)), T(rollsB.map((roll) => roll.track)));
  console.log('zippedRolls', zippedRolls);

  return (
    <table>
      <thead>
        <tr>
          <th className='rolltable-header'></th>
          <th className='rolltable-header rolltable-header-seed'>{zippedRolls[0][0][0].raritySeed}</th>
          <th className='rolltable-header'></th>
          {rollsA.map((roll, i) => (
          <React.Fragment key={i}>
            <th className='rolltable-header'></th>
            <th className='rolltable-header'>{roll.gatyasetName}({roll.gatyasetId})</th>
          </React.Fragment>
          ))}
        </tr>
      </thead>
      <tbody>
        {zippedRolls.map((row, i) => (
        <React.Fragment key={i}>
          <tr className='rolltable-row-A'>
            <td className='rolltable-cellid-A'>{i + 1}A</td>
            <td className='rolltable-cell-numeric hover:underline'>
              <a href={`?seed=${row[0][0].unitIfDistinct.unitSeed}&lastCat=${row[0][0].unitIfDistinct.unitName}&rolls=${rolls}&gatyasets=${gatyasets}`}>
                {row[0][0].unitIfDistinct.unitSeed}
              </a>
            </td>
            <td className='rolltable-cell-numeric'>{row[0][0].raritySeed % 10000}</td>

            { // track A
              row[0].map((unit: Roll, j: number) => (
              <React.Fragment key={j}>
                <td className='rolltable-cell-numeric'>{unit.unitIfDistinct.unitIndex}</td>
                <td className={`rolltable-cell-unitname rarity-${unit.rarity}A`}>
                  {unit.unitIfDistinct.unitName}
                  {unit.dupeInfo?.showDupe && ( // dupe track switch
                    <>
                      <br/>
                      <span className='rolltable-switch-AtoB'>
                        {unit.unitIfDupe?.unitName}
                        {` -> ${unit.dupeInfo.targetCellId}`}
                      </span>
                      <span className='rolltable-switch-BtoA'>
                        {`${unit.dupeInfo.targetWillRerollAgain ? 'R' : ''}`}
                      </span>
                    </>
                  )}
                </td>
              </React.Fragment>
              ))
            }

          </tr>
          <tr className='rolltable-row-B'>
            <td className='rolltable-cellid-B'>{i + 1}B</td>
            <td className='rolltable-cell-numeric hover:underline'>
              <a href={`?seed=${row[1][0].unitIfDistinct.unitSeed}&lastCat=${row[1][0].unitIfDistinct.unitName}&rolls=${rolls}&gatyasets=${gatyasets}`}>
                {row[1][0].unitIfDistinct.unitSeed}
              </a>
            </td>
            <td className='rolltable-cell-numeric'>{row[1][0].raritySeed % 10000}</td>

            { // track B
              row[1].map((unit: Roll, j: number) => (
              <React.Fragment key={j}>
                <td className='rolltable-cell-numeric'>{unit.unitIfDistinct.unitIndex}</td>
                <td className={`rolltable-cell-unitname rarity-${unit.rarity}B`}>
                  {unit.unitIfDistinct.unitName}
                  {unit.dupeInfo?.showDupe && ( // dupe track switch
                    <>
                      <span className='rolltable-switch-BtoA'><br/>
                        {unit.unitIfDupe?.unitName}
                        {` -> ${unit.dupeInfo.targetCellId}`}
                      </span>
                      <span className='rolltable-switch-AtoB'>
                        {`${unit.dupeInfo.targetWillRerollAgain ? 'R' : ''}`}
                      </span>
                    </>
                  )}
                </td>
              </React.Fragment>
              ))
            }

          </tr>
        </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};


const RollTable = () => {
    
  const searchParams = useSearchParams();
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };

  const initialSeed = parseInt(getQueryParam("seed") || DEFAULTS.seed, 10);
  const numRolls = parseInt(getQueryParam("rolls") || DEFAULTS.rolls, 10);
  // Buffer so that track switches near the end of numRolls can be processed
  const NUM_ROLLS_BUFFER = 10;
  const lastCatFromQueryParams = getQueryParam("lastCat") || DEFAULTS.lastCat;
  // const [selectedType, selectedSeedStr, selectedGatyaSet] = getQueryParam("selected")?.split(",") || "";
  // const selectedSeed = parseInt(selectedSeedStr, 10) || 0;

  const allRolls = GenerateAllRolls(initialSeed, numRolls + NUM_ROLLS_BUFFER);

  // Augment roll data with dupe track switch data
  // For this processing we'll identify each cell by its raritySeed
  allRolls.forEach(({ trackA, trackB }) => {
    // Find all cells that should dupe track switch
    const cellsWithDupeTrackSwitches: number[] = [];
    const findCellsWithDupeTrackSwitches = (lastCat: string, track: Roll[]) => {
      track.forEach((roll) => {
        if (roll.unitIfDupe && roll.unitIfDistinct.unitName === lastCat) {
          cellsWithDupeTrackSwitches.push(roll.raritySeed);
        }
        lastCat = roll.unitIfDistinct.unitName;
      });
    };
    findCellsWithDupeTrackSwitches(lastCatFromQueryParams, trackA);
    findCellsWithDupeTrackSwitches("", trackB);

    // Process all cells that should dupe track switch
    cellsWithDupeTrackSwitches.forEach((raritySeed) => {
      const findCell = (raritySeed: number) =>
        trackA.find((roll) => roll.raritySeed === raritySeed) ||
        trackB.find((roll) => roll.raritySeed === raritySeed);
      const findCellId = (raritySeed: number) => {
        const trackAIndex = trackA.findIndex(
          (roll) => roll.raritySeed === raritySeed
        );
        if (trackAIndex >= 0) {
          return `${trackAIndex + 1}A`;
        }
        const trackBIndex = trackB.findIndex(
          (roll) => roll.raritySeed === raritySeed
        );
        return `${trackBIndex + 1}B`;
      };

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
        }
        sourceCell.dupeInfo = {
          showDupe: true,
          targetCellId: findCellId(destinationRaritySeed),
          targetWillRerollAgain:
            sourceCell.unitIfDupe!.unitName ===
            destinationCell.unitIfDistinct.unitName,
        };
        sourceCell = destinationCell;
      }
    });
  });

  const trackARolls = allRolls.map((roll) => ({
    gatyasetName: roll.gatyasetName,
    gatyasetShortName: roll.gatyasetShortName,
    gatyasetId: roll.gatyasetId,
    track: roll.trackA.slice(0, numRolls),
  }));

  const trackBRolls = allRolls.map((roll) => ({
    gatyasetName: roll.gatyasetName,
    gatyasetShortName: roll.gatyasetShortName,
    gatyasetId: roll.gatyasetId,
    track: roll.trackB.slice(0, numRolls),
  }));

  return (
    <div>
      <TrackTable rollsA={trackARolls} rollsB={trackBRolls} />
    </div>
  );
};

export default RollTable;
