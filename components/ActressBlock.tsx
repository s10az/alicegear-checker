"use client";

import { useAtom } from "jotai";
import { ActressType } from "@/types/actress";
import { allActressAtom } from "@/atoms";
import ActressList from "@/components/ActressList";
import ButtonList from "@/components/ButtonList";
import FilterList from "@/components/FilterList";
import { calcPercentage } from "@/utils/calcPercentage";

const ActressBlock = () => {
  const [allActressState] = useAtom<ActressType[]>(allActressAtom);

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

  const isFilterEnabled: boolean =
    filteredActressNum != actressNum ? true : false;

  return (
    <>
      <div className="flex flex-col justify-center text-center my-6 h-14">
        <p className="text-lg sm:text-xl">
          スカウト率 {percentage}% ( {actressCheckedNum}/{actressNum} )
        </p>

        {isFilterEnabled && (
          <p>
            フィルター対象 スカウト率 {filteredPercentage}% ({" "}
            {filteredActressCheckedNum}/{filteredActressNum} )
          </p>
        )}
      </div>

      <ButtonList />

      <FilterList />

      {filteredActressNum > 0 ? (
        <ActressList />
      ) : (
        <p className="text-lg text-center my-6">
          フィルター対象のアクトレスがいません
        </p>
      )}
    </>
  );
};

export default ActressBlock;
