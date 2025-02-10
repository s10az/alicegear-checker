"use client";

import ActressBox from "@/components/ActressBox";
import { ActressType } from "@/types/actress";
import { useAtom } from "jotai";
import { allActressAtom } from "@/atoms";

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
    // console.log(allActressState);
  };

  return (
    <>
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
