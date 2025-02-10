"use client";

import React from "react";
import { useAtom } from "jotai";
import { allActressAtom } from "@/atoms";
import ActressList from "@/components/ActressList";

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
      <p className="text-lg sm:text-xl text-center my-2">
        スカウト率 {percentage}% ( {actressCheckedNum}/{actressNum} )
      </p>

      {actressCheckedNum > 0 && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleReset}
            className="text-sm px-3 py-1 bg-gray-200 border border-gray-500 rounded hover:bg-gray-400"
            title="全アクトレスの選択状態を解除します"
          >
            リセット
          </button>
        </div>
      )}

      <ActressList />
    </>
  );
};

export default ActressBox;
