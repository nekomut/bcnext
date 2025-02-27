'use client'

import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { generateWorkerInitializationMessage } from "./workerMsg";
import Results from "./Results";
import { RareGatyaSetList, NormalGatyaSetList, GatyaSet } from '@/data/gatyasets';

type WorkerMessage = {
  type: "progress" | "seedFound";
  percentageSearched?: number;
  seed?: number;
};

export default function Seeker() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  // const getQueryParam = (key: string) => {
  //   return searchParams.get(key);
  // };
  
  const setQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const GatyaSetList = [...RareGatyaSetList, ...NormalGatyaSetList]
  const findGatyaSet = (shortName: string) => {
    return GatyaSetList.find((gatyaset) => gatyaset.shortName === shortName);
  };

  const [gatyaSet, setGatyaSet] = useState<GatyaSet | null>(null);
  const hasGatyaSet = gatyaSet !== null;

  const [guaranteed, setGuaranteed] = useState<boolean>(false);
  const [userRolls, setUserRolls] = useState<(string | null)[]>(
    Array(10).fill(null)
  );
  const setUserRoll = (index: number, unit: string | null) => {
    if (unit === "null") {
      unit = null;
    }
    setUserRolls((prevRolls) => [
      ...prevRolls.slice(0, index),
      unit,
      ...prevRolls.slice(index + 1),
    ]);
  };

  const gatyasetPool = gatyaSet?.pools.flatMap((pool) => pool.units);

  const [progresses, setProgresses] = useState<number[]>([]);
  const setWorkerProgress = (worker: number, progress: number) => {
    setProgresses((prevProgresses) => [
      ...prevProgresses.slice(0, worker),
      progress,
      ...prevProgresses.slice(worker + 1),
    ]);
  };
  const [seedsFound, setSeedsFound] = useState<number[]>([]);
  const isSearching = progresses.length > 0 && progresses.some((p) => p < 100);
  const startedAndFinishedSearching = progresses.length > 0 && !isSearching;

  const onClick = () => {
    const partialInitialMessage = generateWorkerInitializationMessage({
      gatyaset: gatyaSet!,
      rolls: userRolls.filter(Boolean) as string[],
    });

    if (window.Worker) {
      const chunkSize = 100_000_000;
      const startingSeed = 1;
      const endingSeedPlusOne = 2 ** 32;
      const chunks = [];
      for (let start = 0; start <= endingSeedPlusOne; start += chunkSize) {
        chunks.push([
          Math.max(startingSeed, start),
          Math.min(endingSeedPlusOne, start + chunkSize),
        ]);
      }

      const workers = [];
      setProgresses(chunks.map(() => 0));
      setSeedsFound([]);
      for (const [workerNumber, [startSeed, endSeed]] of chunks.entries()) {
        const initialMessage = {
          ...partialInitialMessage,
          workerNumber,
          startSeed,
          endSeed,
        };
        const worker = new Worker(
          new URL("./worker.js", import.meta.url)
        );
        worker.onmessage = (event: { data: WorkerMessage }) => {
          const messageType = event.data.type;
          if (messageType === "progress") {
            setWorkerProgress(workerNumber, event.data.percentageSearched!);
          } else if (messageType === "seedFound") {
            setSeedsFound((prevSeedsFound) => [
              ...prevSeedsFound,
              event.data.seed!,
            ]);
          }
        };
        worker.postMessage(initialMessage);
        workers.push(worker);
      }
    } else {
      alert("Sorry, web workers are not supported in this browser.");
    }
  };

  
  return (
    <> 
      <p className="mx-1 mt-2 mb-0">GatyaSet:</p>
      <select
        className="text-gray-800 mx-1 mt-0 mb-1"
        onChange={(event) => {
          const selectedGatyaSet = findGatyaSet(event.target.value);
          console.log(selectedGatyaSet);
          setGatyaSet(selectedGatyaSet || null);
          setQueryParam("gatyaset", event.target.value);
        }}
      >
        {GatyaSetList.map((gatyaset) => {
          return (
            <option
              className="text-gray-800"
              key={gatyaset.shortName} value={gatyaset.shortName}
            >
              {gatyaset.name}
              {gatyaset.guaranteed! > 0 ? '[確定]':''}
              ({gatyaset.gatyasetId})
            </option>
          );
        })}
      </select> 

      {hasGatyaSet && (
        <>
          <label className="align-middle">
            <input
              type="checkbox"
              className="mx-1 align-text-bottom"
              defaultChecked={guaranteed}
              onClick={(event) => {
                setGuaranteed((event.target as HTMLInputElement).checked);
              }}
            />
            超激レア確定 
          </label>
          {guaranteed && (
            <div>
              超激レア確定の場合、確定枠を含めないでください
            </div>
          )}
          <div className="flex flex-col">
            {userRolls.map((roll, i) => {
              return (
                <select
                  key={i}
                  onChange={(e) => setUserRoll(i, e.target.value)}
                  className="text-gray-800 max-w-xs mx-1 mb-1 "
                >
                  <option value="null" defaultValue={roll === null ? "true" : "false"}>
                    -- Select roll {i + 1} --
                  </option>
                  {gatyasetPool!.map((unit,j) => {
                    return (
                      <option key={`${j}.${unit}`} value={unit} defaultValue={roll === unit ? "true" : "false"}>
                        {unit}
                      </option>
                    );
                  })}
                </select>
              );
            })}
          </div>

          <button
            type="button"
            className="button-blue mx-1"
            onClick={onClick}
            disabled={userRolls.every((roll) => roll === null) || isSearching}
          >
            計算実行 
          </button>
          {(isSearching || startedAndFinishedSearching) && (
            <Results
              guaranteed={guaranteed}
              workerProgresses={progresses}
              seedsFound={seedsFound}
              isSearching={isSearching}
              gatyaSet={gatyaSet!}
              numPulls={userRolls.filter(Boolean).length}
            />
          )}
        </>
      )}
    </>
  );

}
