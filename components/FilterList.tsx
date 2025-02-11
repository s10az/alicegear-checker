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

  const toggleNormal = () => {
    setFilter({ ...filter, normal: !filter.normal });
  };
  const toggleAnother = () => {
    setFilter({ ...filter, another: !filter.another });
  };
  const toggleFactor = () => {
    setFilter({ ...filter, factor: !filter.factor });
  };
  const toggleStellar = () => {
    setFilter({ ...filter, stellar: !filter.stellar });
  };

  const toggleElectric = () => {
    setFilter({ ...filter, electric: !filter.electric });
  };
  const toggleGravity = () => {
    setFilter({ ...filter, gravity: !filter.gravity });
  };
  const toggleHeat = () => {
    setFilter({ ...filter, heat: !filter.heat });
  };
  const toggleFreeze = () => {
    setFilter({ ...filter, freeze: !filter.freeze });
  };

  return (
    <div className="my-4">
      <div className="flex justify-center gap-2">
        <label>
          <input
            type="checkbox"
            checked={filter.normal}
            onChange={toggleNormal}
            className="w-4 h-4 accent-gray-500 mr-1"
          />
          ノーマル
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.another}
            onChange={toggleAnother}
            className="w-4 h-4 accent-gray-500 mr-1"
          />
          アナザー
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.factor}
            onChange={toggleFactor}
            className="w-4 h-4 accent-gray-500 mr-1"
          />
          ファクター
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.stellar}
            onChange={toggleStellar}
            className="w-4 h-4 accent-gray-500 mr-1"
          />
          ステラー
        </label>
      </div>
      <div className="flex justify-center gap-1">
        <label>
          <input
            type="checkbox"
            checked={filter.electric}
            onChange={toggleElectric}
            className="w-4 h-4 accent-yellow-500 mr-1"
          />
          電撃
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.gravity}
            onChange={toggleGravity}
            className="w-4 h-4 accent-purple-500 mr-1"
          />
          重力
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.heat}
            onChange={toggleHeat}
            className="w-4 h-4 accent-red-500 mr-1"
          />
          焼夷
        </label>
        <label>
          <input
            type="checkbox"
            checked={filter.freeze}
            onChange={toggleFreeze}
            className="w-4 h-4 accent-blue-500 mr-1"
          />
          冷撃
        </label>
      </div>
    </div>
  );
};

export default FilterList;
