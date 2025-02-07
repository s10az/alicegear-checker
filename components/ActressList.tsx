"use client";

import React from "react";
import ActressData from "@/assets/actress.json";
import ActressBox from "@/components/ActressBox";
import { ActressType } from "@/types/actress";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const allActress: ActressType[] = ActressData.map((actress) => {
  return {
    ...actress,
    isChecked: false,
  } as ActressType;
});

const allActressAtom = atomWithStorage("allActress", allActress);

const ActressList = () => {
  const [allActressState, setAllActressState] =
    useAtom<ActressType[]>(allActressAtom);

  const handleToggleCheck = (id: string) => {
    setAllActressState((prevState) =>
      prevState.map((actress) =>
        actress.id === id
          ? { ...actress, isChecked: !actress.isChecked }
          : actress,
      ),
    );
    // console.log(allActressState)
  };

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

      <div className="flex justify-center my-4">
        <button
          onClick={handleReset}
          className="text-sm px-3 py-1 bg-gray-200 border border-gray-500 rounded hover:bg-gray-400"
          title="全アクトレスの選択状態を解除します"
        >
          リセット
        </button>
      </div>

      <div className="max-w-[900px] mx-auto my-4 flex flex-wrap justify-center gap-2">
        {allActressState.map((actress) => (
          <ActressBox
            key={actress.id}
            actress={actress}
            onClick={handleToggleCheck}
          />
        ))}
      </div>
    </>
  );
};

export default ActressList;
