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
      <p className="text-yellow-500 mx-1">探索中...</p>
      {workerProgresses.map((progress, i) => {
        return (
          <div key={i}>
            <p>
              <strong className="block float float-left text-right min-w-[25px] mx-1">#{i + 1}</strong>
              <span className="text-green-500">{"■".repeat(progress/5)}</span> {progress}%
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      {seedsFound.length > 0 ? (
        <>
          <div>
            {seedsFound.length}個のシードが見つかりました
          </div>
            {seedsFound.map((seedBeforeRolls, i) => {
              const [seedAfterRolls, nextRollIsReroll] = generateRollsLightweight(seedBeforeRolls, numPulls, gatyaSet);
              return (
                <div key={i}>
                  <strong>Seed {i + 1}</strong>
                  <div>
                    <p className="text-yellow-500">現在のシード値: <strong>{seedAfterRolls}</strong></p>
                    <p className="text-gray-500">({numPulls}連回す直前のシード値: <strong>{seedBeforeRolls}</strong>)</p>
                    {guaranteed && (<p>確定枠のシード値: <strong>{xorShift32(seedAfterRolls)}</strong></p>)}
                    {!guaranteed && nextRollIsReroll && (<p><strong>⚠️</strong> 現在のシード値はレア被りが検知されています</p>)}
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <div>
          <p>シード値が見つかりませんでした</p>
        </div>
      )}
    </div>
  );
};

export default Results;