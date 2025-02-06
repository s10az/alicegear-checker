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

  return (
    <div
      className={`border border-gray-500 rounded-md w-[150px] h-[150px] ${actress.isChecked ? "bg-cyan-200" : "bg-gray-200"}`}
      onClick={onClickHandler}
    >
      <div className="flex flex-col justify-end h-full">
        <Image
          src={imageFile}
          width={80}
          height={120}
          alt={actress.name}
          className={`w-[80px] h-[120px] mx-auto my-auto ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        />
        <p
          className={`text-center rounded-md ${getAttributeColor(actress.attribute)} ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        >
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
