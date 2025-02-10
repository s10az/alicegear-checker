"use client";

import { useAtom } from "jotai";
import { ActressType } from "@/types/actress";
import { allActressAtom } from "@/atoms";
import ActressList from "@/components/ActressList";
import FilterList from "@/components/FilterList";

const ActressBox = () => {
  const [allActressState, setAllActressState] =
    useAtom<ActressType[]>(allActressAtom);

  const handleReset = () => {
    const res: boolean = window.confirm(
      `全アクトレス(${actressCheckedNum}人)の選択状態を解除しますか?`,
    );

    if (!res) {
      return;
    }

    setAllActressState((prevState) =>
      prevState.map((actress) => ({ ...actress, isChecked: false })),
    );
  };

  const actressNum: number = allActressState.length;
  const actressCheckedNum: number = allActressState.filter(
    (actress) => actress.isChecked,
  ).length;
  const percentage: number =
    Math.round((actressCheckedNum / actressNum) * 10000) / 100;

  return (
    <>
      <p className="text-lg sm:text-xl text-center my-6">
        スカウト率 {percentage}% ( {actressCheckedNum}/{actressNum} )
      </p>

      <div className="flex justify-center my-4">
        <button
          onClick={handleReset}
          className="text-sm bg-green-300 disabled:bg-gray-400 border border-gray-500 disabled:border-black rounded px-1 py-1"
          disabled={actressCheckedNum > 0 ? false : true}
          title="全アクトレスの選択状態を解除します"
        >
          リセット
        </button>
      </div>

      <FilterList />

      <ActressList />
    </>
  );
};

export default ActressBox;
