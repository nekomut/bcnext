'use client'

import React from "react";
import { useSearchParams } from 'next/navigation';
import { Roll, GenerateAllRolls } from "./seed";
import { DEFAULTS } from "./constants";
import { NormalGatyaSetList } from "@/data/gatyasets";

export type GatyaSetTrackRolls = {
  gatyasetName: string;
  gatyasetShortName: string;
  gatyasetId: number;
  track: Roll[];
};

export const T = (arr: Array<Roll[]>) => Array(Math.min(...arr.map((a) => a.length))).fill(0).map((_, i) => arr.map((a) => a[i]));
export const zip = (arr1: Array<Roll[]>, arr2: Array<Roll[]>) => arr1.map((_, i) => [arr1[i], arr2[i]]);    
export const chunk = <Roll, >(array: Roll[], size: number): Roll[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size),
  );
};

const TileTable = ({ rollsA, rollsB }: { rollsA: GatyaSetTrackRolls[]; rollsB: GatyaSetTrackRolls[] }) => {  

  const zippedRolls = zip(T(rollsA.map((roll) => roll.track)), T(rollsB.map((roll) => roll.track)));
  const chunkedRolls = chunk(zippedRolls, 100);
  console.log(chunkedRolls);

  return (
    <>
      <h1 className="font-bold text-purple-500 pl-3">闇目レーダー</h1>
      <table>
       <thead>
        <tr>
          <th></th>
        {chunkedRolls[0].map((_, i) => (
        <React.Fragment key={i}>
          <th className="text-right text-xs">{(i+1) % 10 ? '' : (i+1)}</th>
        </React.Fragment>
        ))}
        </tr>
       </thead>
       <tbody>
        {chunkedRolls.map((chunk, i) => (   
          <React.Fragment key={`${i}`}>
            <tr>
              <td className='tile-chunkId-A leading-[0.9] pr-1'>{`${i*100+1}A`}</td>
              {chunk.map((row, j) => (
              <React.Fragment key={`${j}-1`}>
              <td className={`tile-rarity-${row[0][1].rarity}A`}>■</td>
              </React.Fragment>
              ))}
              <td className="tile-rarity-4A text-right font-bold">{chunk.filter(x => x[0][1].rarity == 4).length}</td>
            </tr> 
            <tr>
              <td className='tile-chunkId-B leading-[0.9] pr-1'>{`${i*100+1}B`}</td>
              {chunk.map((row, j) => (
              <React.Fragment key={`${j}-2`}>
              <td className={`tile-rarity-${row[1][1].rarity}B`}>■</td>
              </React.Fragment>
              ))}
              <td className="tile-rarity-4B text-right font-bold">{chunk.filter(x => x[1][1].rarity == 4).length}</td>
            </tr> 
          </React.Fragment>
        ))}
       </tbody>
      </table>
    </>
  );
};


const Tile = () => {

  const searchParams = useSearchParams();
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };

  const initialSeed = parseInt(getQueryParam("seed") || DEFAULTS.seed, 10);
  const numRolls = 2000;

  const NUM_ROLLS_BUFFER = 0;
  const lastCat = getQueryParam("lastCat") || DEFAULTS.lastCat;

  const selectedGatyaSets = 'p,c'.split(','); 
  const gatyasets = NormalGatyaSetList.filter((gatyaset) =>
    selectedGatyaSets.includes(gatyaset.shortName)
  );

  const allRolls = GenerateAllRolls(initialSeed, numRolls + NUM_ROLLS_BUFFER, gatyasets, lastCat);

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
    <div className="float-right">
      <TileTable rollsA={trackARolls} rollsB={trackBRolls} />
    </div>
  )
};

export default Tile;