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
      <label className="label-seed" htmlFor="input-seed">seed</label>
      <input
        id="input-seed"
        name="seed"
        type="text"
        min={1}
        className="input-seed"
        value={seedInput}
        onChange={(event) => {
          setSeedInput(event.target.value);
          setQueryParam("seed", event.target.value);
        }}
      />
      <label className="label-rolls" htmlFor='input-rolls'>rolls</label>
      <input
        id="input-rolls"
        name="rolls"
        type="number"
        min={1}
        className="input-rolls"
        value={rollsInput}
        onChange={(event) => {
          setRollsInput(event.target.value);
          setQueryParam("rolls", Number(event.target.value) > 0 ? event.target.value : DEFAULTS.rolls);
        }}
      />
      <button
        type="button"
        className="button-update"
        onClick={() => {
          router.refresh();
        }}
      >
      update
      </button>
    </div>
  );
};