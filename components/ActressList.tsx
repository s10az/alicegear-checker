"use client";

import React, { useState } from "react";
import ActressData from "@/assets/actress.json";
import ActressBox from "@/components/ActressBox";
import { ActressType } from "@/types/actress";

const ActressList = () => {
  const allActress: ActressType[] = ActressData.map((actress) => {
    return {
      ...actress,
      isChecked: false,
    } as ActressType;
  });

  const [allActressState, setAllActressState] =
    useState<ActressType[]>(allActress);

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

  const actressNum: number = allActressState.length;
  const actressCheckedNum: number = allActressState.filter(
    (actress) => actress.isChecked,
  ).length;
  const percentage: number =
    Math.round((actressCheckedNum / actressNum) * 10000) / 100;

  return (
    <>
      <p className="text-xl text-center m-2">
        スカウト率 {percentage}% ( {actressCheckedNum}/{actressNum} )
      </p>
      <div className="max-w-3xl mx-auto my-4 flex flex-wrap justify-center gap-2">
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
