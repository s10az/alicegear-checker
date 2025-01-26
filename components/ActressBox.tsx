import React from "react";
import Image from "next/image";
import { ActressType } from "@/types/actress";

interface ActressBoxProps {
  actress: ActressType;
  onClick: (id: string) => void;
}

const ActressBox = ({ actress, onClick }: ActressBoxProps) => {
  const onClickHandler = () => {
    onClick(actress.id);
  };

  const imageFile: string = "/actress/" + actress.id + ".jpg";
  const bg: string = actress.isChecked ? "bg-cyan-200" : "bg-gray-200";
  const opacity: string = actress.isChecked ? "opacity-100" : "opacity-50";

  return (
    <div
      className={"relative border border-gray-500 rounded-md w-36 h-36 " + bg}
      onClick={onClickHandler}
    >
      <div>
        <Image
          src={imageFile}
          width={70}
          height={105}
          alt={actress.name}
          className={"w-[70px] h-[105px] mt-1.5 mx-auto " + opacity}
        />
        <p className="text-center mt-1">
          {actress.name}
          {actress.kind == "another" ? " (A)" : ""}
          {actress.kind == "factor" ? " (F)" : ""}
          {actress.kind == "stellar" ? " (S)" : ""}
        </p>
      </div>
    </div>
  );
};

export default ActressBox;
