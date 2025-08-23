import { atom } from "jotai";
import ActressData from "@/actress.json";
import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";

const allActress: ActressType[] = ActressData.map((actress) => {
  return {
    ...actress,
    isChecked: false,
    isFiltered: false,
  } as ActressType;
});

export const allActressAtom = atom<ActressType[]>(allActress);

export const filterAtom = atom<FilterType>({
  normal: false,
  another: false,
  factor: false,
  stellar: false,
  electric: false,
  gravity: false,
  heat: false,
  freeze: false,
});
