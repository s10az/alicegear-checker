import { atom } from "jotai";
import ActressData from "@/assets/actress.json";
import { ActressType } from "@/types/actress";
import { atomWithStorage } from "jotai/utils";

const allActress: ActressType[] = ActressData.map((actress) => {
  return {
    ...actress,
    isChecked: false,
  } as ActressType;
});

export const allActressAtom = atomWithStorage<ActressType[]>(
  "allActress",
  allActress,
);
