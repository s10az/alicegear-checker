"use client";

import { useAtom } from "jotai";
import { ActressType } from "@/types/actress";
import { allActressAtom } from "@/atoms";
import ActressList from "@/components/ActressList";
import FilterList from "@/components/FilterList";
import { calcPercentage } from "@/utils/calcPercentage";

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
  const percentage: number = calcPercentage(actressCheckedNum, actressNum);

  const filteredActressNum: number = allActressState.filter(
    (actress) => !actress.isFiltered,
  ).length;
  const filteredActressCheckedNum: number = allActressState.filter(
    (actress) => {
      if (!actress.isFiltered && actress.isChecked) {
        return true;
      }
    },
  ).length;
  const filteredPercentage: number = calcPercentage(
    filteredActressCheckedNum,
    filteredActressNum,
  );

  let isFilterEnabled: boolean = false;
  if (filteredActressNum != actressNum) {
    isFilterEnabled = true;
  }

  return (
    <>
      <div className="my-4 h-14">
        <p className="text-lg sm:text-xl text-center">
          スカウト率 {percentage}% ( {actressCheckedNum}/{actressNum} )
        </p>

        {isFilterEnabled && (
          <p className="text-center mt-1">
            フィルター対象 スカウト率 {filteredPercentage}% ({" "}
            {filteredActressCheckedNum}/{filteredActressNum} )
          </p>
        )}
      </div>

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

      {filteredActressNum > 0 ? (
        <ActressList />
      ) : (
        <p className="text-lg text-center">
          フィルター対象のアクトレスがいません
        </p>
      )}
    </>
  );
};

export default ActressBox;
