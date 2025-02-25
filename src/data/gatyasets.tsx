import { NormalGatyaSetList as normal } from './normal';
import { RareGatyaSetList as rare } from './rare';

export type GatyaSet = {
  name: string;
  shortName: string;
  gatyasetId: number;
  guaranteed?: number;
  rateCumSum: number[];
  pools: {
    rate: number;
    units: string[];
    reroll: boolean;
  }[];
};

export const NormalGatyaSetList = normal;
export const RareGatyaSetList = rare;
// export const ToArray = (obj: { [key: string]: GatyaSet }) => {
//   return Object.keys(obj).map(key => obj[key]);
// };
// export const RareGatyaSetList = ToArray(rare);
