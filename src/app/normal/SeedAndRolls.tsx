'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { DEFAULTS } from './constants';

export default function SeedAndRolls() {
    
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  const getQueryParam = useCallback((key: keyof typeof DEFAULTS) => {
    return searchParams.get(key);
  }, [searchParams]);
  
  const setQueryParam = (key: keyof typeof DEFAULTS, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const [seedInput, setSeedInput] = useState<string>('');
  const [rollsInput, setRollsInput] = useState(getQueryParam("rolls") || DEFAULTS.rolls);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSeed = localStorage.getItem("normal_seed");
      setSeedInput(getQueryParam("seed") || storedSeed || DEFAULTS.seed);
    }
  }, [getQueryParam]);

  useEffect(() => {
    if (typeof window !== 'undefined' && seedInput !== null) {
      localStorage.setItem("normal_seed", seedInput);
    }
  }, [seedInput]);

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