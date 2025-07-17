'use client'

import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Roll, GenerateAllRolls } from "./seed";
import { DEFAULTS } from "./constants";
import { NormalGatyaSetList as GatyaSetList } from "@/data/gatyasets";

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


interface TileTableProps {
  rollsA: GatyaSetTrackRolls[];
  rollsB: GatyaSetTrackRolls[];
  showYami: boolean;
  showChouGeki: boolean;
  setShowYami: (value: boolean) => void;
  setShowChouGeki: (value: boolean) => void;
}

const TileTable = ({ rollsA, rollsB, showYami, showChouGeki, setShowYami, setShowChouGeki }: TileTableProps) => {

  const zippedRolls = zip(T(rollsA.map((roll) => roll.track)), T(rollsB.map((roll) => roll.track)));
  const chunkedRolls = chunk(zippedRolls, 100);

  const getTileClass = (rarity: number, track: 'A' | 'B') => {
    if (rarity === 4 && !showYami) return `tile-rarity-1${track}`;
    if (rarity === 3 && !showChouGeki) return `tile-rarity-1${track}`;
    return `tile-rarity-${rarity}${track}`;
  };

  const getVisibleCount = (chunk: Array<readonly [Roll[], Roll[]]>, track: 0 | 1, rarity: number) => {
    if (rarity === 4 && !showYami) return '';
    if (rarity === 3 && !showChouGeki) return '';

    const count = chunk.filter(x => x[track]?.[1]?.rarity === rarity).length;
    return count > 0 ? count : '';
  };

  return (
    <div className="pr-1 py-3">
      <h1 className="font-bold pl-3">
        猫目{" "}
        <label className="mr-1">
          <input
            type="checkbox"
            checked={showYami}
            onChange={(e) => setShowYami(e.target.checked)}
            className="mr-1"
          />
          <span className="tile-rarity-4A">闇</span>
        </label>
        {" / "}
        <label>
          <input
            type="checkbox"
            checked={showChouGeki}
            onChange={(e) => setShowChouGeki(e.target.checked)}
            className="mr-1"
          />
          <span className="tile-rarity-3A">超激レア</span>
        </label>
      </h1>
      <table>
       <thead>
        <tr>
          <th></th>
        {chunkedRolls[0].map((_, i) => (
        <React.Fragment key={i}>
          <th className="text-right text-[0.75em]">{(i+1) % 10 ? '' : (i+1)}</th>
        </React.Fragment>
        ))}
        </tr>
       </thead>
       <tbody>
        {chunkedRolls.map((chunk, i) => (
          <React.Fragment key={`${i}`}>
            <tr>
              <td className='tile-chunkId-A text-[0.8em] leading-[0.9] pr-1'>{`${i*100+1}A`}</td>
              {chunk.map((row, j) => (
              <React.Fragment key={`${j}-1`}>
              <td className={getTileClass(row[0][1].rarity, 'A')}>■</td>
              </React.Fragment>
              ))}
              <td className="tile-rarity-4A text-[0.9em] text-right font-bold">{getVisibleCount(chunk as unknown as Array<readonly [Roll[], Roll[]]>, 0, 4)}</td>
            </tr>
            <tr>
              <td className='tile-chunkId-B text-[0.8em] leading-[0.9] pr-1'>{`${i*100+1}B`}</td>
              {chunk.map((row, j) => (
              <React.Fragment key={`${j}-2`}>
              <td className={getTileClass(row[1][1].rarity, 'B')}>■</td>
              </React.Fragment>
              ))}
              <td className="tile-rarity-4B text-[0.9em] text-right font-bold">{getVisibleCount(chunk as unknown as Array<readonly [Roll[], Roll[]]>, 1, 4)}</td>
            </tr>
          </React.Fragment>
        ))}
       </tbody>
      </table>
    </div>
  );
};


const Tile = () => {
  const [showYami, setShowYami] = useState(true);
  const [showChouGeki, setShowChouGeki] = useState(false);

  const searchParams = useSearchParams();
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };

  const initialSeed = parseInt(getQueryParam("seed") || DEFAULTS.seed, 10);
  const numRolls = 2000;

  const NUM_ROLLS_BUFFER = 0;
  const lastCat = getQueryParam("lastCat") || DEFAULTS.lastCat;

  const selectedGatyaSets = 'p,c,g'.split(',');
  const gatyasets = GatyaSetList.filter((gatyaset) =>
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
    <div className="float-left">
      <TileTable
        rollsA={trackARolls}
        rollsB={trackBRolls}
        showYami={showYami}
        showChouGeki={showChouGeki}
        setShowYami={setShowYami}
        setShowChouGeki={setShowChouGeki}
      />
    </div>
  )
};

export default Tile;
