'use client'

import React, { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { DEFAULTS } from './constants';

export default function SeedAndRolls() {
    
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  const getQueryParam = (key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  };
  
  const setQueryParam = (key: keyof typeof DEFAULTS, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const [seedInput, setSeedInput] = useState(getQueryParam("seed") || DEFAULTS.seed);
  const [rollsInput, setRollsInput] = useState(getQueryParam("rolls") || DEFAULTS.rolls);

  return (
    <div>
      <label className="ml-1" htmlFor="input-seed">seed</label>
      <input
        id="input-seed"
        name="seed"
        type="text"
        min={1}
        className="bg-gray-100 font-bold text-right text-green-600 rounded w-[72px] pr-1 mx-1"
        value={seedInput}
        onChange={(event) => {
          setSeedInput(event.target.value);
          setQueryParam("seed", event.target.value);
        }}
      />
      <label className="ml-1" htmlFor='input-rolls'>rolls</label>
      <input
        id="input-rolls"
        name="rolls"
        type="number"
        min={1}
        className="bg-gray-100 font-bold text-right text-gray-600 rounded w-[50px] pr-1 mx-1"
        value={rollsInput}
        onChange={(event) => {
          setRollsInput(event.target.value);
          setQueryParam("rolls", event.target.value);
        }}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 mx-1 my-1 rounded"
        onClick={() => {
          // setQueryParam("seed", seedInput);
          // setQueryParam("rolls", rollsInput);
          // console.log("seedInput", seedInput, getQueryParam("seed"));
          // console.log("rollsInput", rollsInput, getQueryParam("rolls"));
          router.refresh();
        }}
      >
      update
      </button>
    </div>
  );
};