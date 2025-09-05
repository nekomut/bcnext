'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { NormalGatyaSetList as GatyaSetList } from '@/data/gatyasets';
import { DEFAULTS } from './constants';
 
export default function GatyaSets() {

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

  let selectedGatyaSets = getQueryParam("gatyasets")?.split(",") || [];

  return (
    <div className="flex flex-wrap gap-0.5 ml-1">
      {GatyaSetList.map((gatyaset) => {
        selectedGatyaSets = getQueryParam("gatyasets")?.split(",") || DEFAULTS.gatyasets.split(","); 
        const isSelected = selectedGatyaSets.includes(gatyaset.shortName);
        return (
          <button
            key={gatyaset.shortName}
            className={`mt-0.5 mx-0 px-1 py-0.5 rounded border transition-colors ${
              isSelected 
                ? 'text-amber-400 border-amber-400 font-semibold' 
                : 'text-gray-600 border-gray-600 hover:bg-gray-700'
            }`}
            onClick={() => {
              let newSelectedGatyaSets: string[];
              if (isSelected) {
                newSelectedGatyaSets = selectedGatyaSets.filter(
                  (gatyasetName) => gatyasetName !== gatyaset.shortName
                );
              } else {
                newSelectedGatyaSets = [
                  ...selectedGatyaSets,
                  gatyaset.shortName,
                ].filter((number, index, self) => self.indexOf(number) === index);
              }
              setQueryParam("gatyasets", newSelectedGatyaSets.join(","));
            }}
          >
            {`${gatyaset.name}(${gatyaset.gatyasetId})`}
          </button>
        );
      })}
    </div>
  );
};
