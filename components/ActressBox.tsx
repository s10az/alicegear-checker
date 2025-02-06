import React from "react";
import Image from "next/image";
import { ActressType } from "@/types/actress";

interface ActressBoxProps {
  actress: ActressType;
  onClick: (id: string) => void;
}

function getAttributeColor(attribute: string) {
  switch (attribute) {
    case "electric":
      return "bg-yellow-400";
    case "gravity":
      return "bg-purple-400";
    case "heat":
      return "bg-red-400";
    case "freeze":
      return "bg-blue-400";
  }

  return "";
}

const ActressBox = ({ actress, onClick }: ActressBoxProps) => {
  const onClickHandler = () => {
    onClick(actress.id);
  };

  const imageFile: string = "/actress/" + actress.id + ".jpg";

  let name: string = actress.name;

  if (actress.kind == "another") {
    name += " (A)";
  } else if (actress.kind == "factor") {
    name += " (F)";
  } else if (actress.kind == "stellar") {
    name += " (S)";
  }

  return (
    <div
      className={`border border-gray-500 rounded-md text-[10px] sm:text-sm  w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] ${actress.isChecked ? "bg-cyan-100" : "bg-gray-200"}`}
      onClick={onClickHandler}
    >
      <div className="flex flex-col justify-end h-full">
        <Image
          src={imageFile}
          width={80}
          height={120}
          alt={name}
          className={`w-[60px] h-[90px] sm:w-[80px] sm:h-[120px] m-auto ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        />
        <p
          className={`text-center rounded-md ${getAttributeColor(actress.attribute)} ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ActressBox;
