import { atom } from "jotai";
import ActressData from "@/actress.json";
import { ActressType } from "@/types/actress";
import { FilterType } from "@/types/filter";
import { atomWithStorage } from "jotai/utils";

const allActress: ActressType[] = ActressData.map((actress) => {
  return {
    ...actress,
    isChecked: false,
    isFiltered: false,
  } as ActressType;
});

export const allActressAtom = atomWithStorage<ActressType[]>(
  "allActress",
  allActress,
);

export const filterAtom = atom<FilterType>({
  normal: true,
  another: true,
  factor: true,
  stellar: true,
  electric: true,
  gravity: true,
  heat: true,
  freeze: true,
});
