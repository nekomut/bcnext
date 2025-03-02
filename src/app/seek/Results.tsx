import React from "react";
import { GatyaSet } from "@/data/gatyasets";
import { xorShift32, generateRollsLightweight } from "./seed";

const Results = ({
  guaranteed,
  workerProgresses,
  seedsFound,
  isSearching,
  gatyaSet,
  numPulls,
}: {
  guaranteed: boolean;
  workerProgresses: number[];
  seedsFound: number[];
  isSearching: boolean;
  gatyaSet: GatyaSet;
  numPulls: number;
}) => {
  if (seedsFound.length > 200) {
    seedsFound = seedsFound.slice(0, 200);
  }

  return isSearching ? (
    <div>
      <p className="text-yellow-500 mx-1 mt-2">計算中...</p>
      {workerProgresses.map((progress, i) => {
        return (
          <div key={i} >
            <strong className="block float float-left text-right min-w-[25px] mr-1">#{i + 1}</strong>
            <span className="block float float-left text-green-500 mr-1">{"■".repeat(progress/5)}</span>
            <span className="block clearfix">{progress}%</span>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      {seedsFound.length > 0 ? (
        <>
          <p className="text-green-500 mx-1 mt-2">{seedsFound.length}個のシードが見つかりました</p>
          {seedsFound.map((seedBeforeRolls, i) => {
            const [seedAfterRolls, nextRollIsReroll] = generateRollsLightweight(seedBeforeRolls, numPulls, gatyaSet);
            return (
              <div key={i} className="mx-1 mt-1">
                <strong>Seed {i + 1}</strong>
                <div>
                  <span className="text-yellow-500">
                    現在のシード値: 
                    <a href={`${!isNaN(Number(gatyaSet.shortName))? 'rare' : gatyaSet.shortName.startsWith('e')? 'event' : 'normal' }?seed=${seedAfterRolls}`} target="_blank" rel="noreferrer">
                      <strong>{`${seedAfterRolls} `}</strong>
                    </a>
                  </span>
                  <span className="text-gray-500">
                    ({numPulls}連を回す直前のシード値:
                    <a href={`${!isNaN(Number(gatyaSet.shortName))? 'rare' : gatyaSet.shortName.startsWith('e')? 'event' : 'normal' }?seed=${seedBeforeRolls}`} target="_blank" rel="noreferrer">
                      <strong>{seedBeforeRolls}</strong>)
                    </a>
                  </span>
                  {!guaranteed && nextRollIsReroll && (
                    <p className="text-yellow-500">⚠️ 次回レア被り検知‼️</p>
                  )}
                  {guaranteed && (
                    <p>確定枠のシード値: <strong>{xorShift32(seedAfterRolls)}</strong></p>
                  )}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-red-500 mx-1 mt-2">シード値が見つかりませんでした</p>
      )}
    </div>
  );
};

export default Results;