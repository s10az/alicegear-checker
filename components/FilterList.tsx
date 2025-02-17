"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { ActressType } from "@/types/actress";
import { filterAtom, allActressAtom } from "@/atoms";
import { isActressFiltered } from "@/utils/isActressFiltered";

const FilterList = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const [, setAllActressState] = useAtom<ActressType[]>(allActressAtom);

  useEffect(() => {
    setAllActressState((prevState) =>
      prevState.map((actress) =>
        isActressFiltered(actress, filter)
          ? { ...actress, isFiltered: false }
          : { ...actress, isFiltered: true },
      ),
    );
  }, [filter, setAllActressState]);

  return (
    <div className="text-sm sm:text-base my-4">
      <div className="flex flex-wrap justify-center gap-2">
        <label>
          <input
            type="checkbox"
            checked={filter.normal}
            onChange={() => {
              setFilter({ ...filter, normal: !filter.normal });
            }}
            className="w-4 h-4 accent-gray-500 align-text-top mr-1"
          />
          ノーマル
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.another}
            onChange={() => {
              setFilter({ ...filter, another: !filter.another });
            }}
            className="w-4 h-4 accent-gray-500 align-text-top mr-1"
          />
          アナザー
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.factor}
            onChange={() => {
              setFilter({ ...filter, factor: !filter.factor });
            }}
            className="w-4 h-4 accent-gray-500 align-text-top mr-1"
          />
          ファクター
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.stellar}
            onChange={() => {
              setFilter({ ...filter, stellar: !filter.stellar });
            }}
            className="w-4 h-4 accent-gray-500 align-text-top mr-1"
          />
          ステラー
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-1">
        <label>
          <input
            type="checkbox"
            checked={filter.electric}
            onChange={() => {
              setFilter({ ...filter, electric: !filter.electric });
            }}
            className="w-4 h-4 accent-yellow-500 align-text-top mr-1"
          />
          電撃
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.gravity}
            onChange={() => {
              setFilter({ ...filter, gravity: !filter.gravity });
            }}
            className="w-4 h-4 accent-purple-500 align-text-top mr-1"
          />
          重力
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.heat}
            onChange={() => {
              setFilter({ ...filter, heat: !filter.heat });
            }}
            className="w-4 h-4 accent-red-500 align-text-top mr-1"
          />
          焼夷
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.freeze}
            onChange={() => {
              setFilter({ ...filter, freeze: !filter.freeze });
            }}
            className="w-4 h-4 accent-blue-500 align-text-top mr-1"
          />
          冷撃
        </label>
      </div>
    </div>
  );
};

export default FilterList;
