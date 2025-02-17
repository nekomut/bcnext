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
    <>
      {GatyaSetList.map((gatyaset) => {
        selectedGatyaSets = getQueryParam("gatyasets")?.split(",") || DEFAULTS.gatyasets.split(","); 
        return (
          <label key={gatyaset.shortName} htmlFor={`ckbox-${gatyaset.shortName}`}>
            <input
              type="checkbox"
              className="mx-1 my-1"
              id={`ckbox-${gatyaset.shortName}`}
              name={gatyaset.shortName}
              defaultChecked={selectedGatyaSets.includes(gatyaset.shortName)}
              onClick={(event) => {
                let newSelectedGatyaSets;
                if ((event.target as HTMLInputElement).checked) {
                  newSelectedGatyaSets = [
                    ...selectedGatyaSets,
                    gatyaset.shortName,
                  ].filter((number, index, self) => self.indexOf(number) === index);
                } else {
                  newSelectedGatyaSets = selectedGatyaSets.filter(
                    (gatyasetName) => gatyasetName !== gatyaset.shortName
                  );
                }
                setQueryParam("gatyasets", newSelectedGatyaSets.join(","));
              }}
            ></input>
            {`${gatyaset.name}(${gatyaset.gatyasetId})`}
          </label>
        );
      })}
    </>
  );
};
