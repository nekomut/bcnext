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
    <div className="flex flex-wrap gap-2">
      {GatyaSetList.map((gatyaset) => {
        selectedGatyaSets = getQueryParam("gatyasets")?.split(",") || DEFAULTS.gatyasets.split(","); 
        const isSelected = selectedGatyaSets.includes(gatyaset.shortName);
        return (
          <button
            key={gatyaset.shortName}
            className={`px-3 py-2 rounded border transition-colors ${
              isSelected 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
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
