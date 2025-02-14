import { ActressType } from "@/types/actress";

interface ActressBoxProps {
  actress: ActressType;
  onClick: (id: string) => void;
}

function getAttributeColor(attribute: string): string {
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

  const imageFile: string = "./actress/" + actress.id + ".jpg";

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
      className={`border border-gray-500 rounded-md text-[10px] sm:text-sm  w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] ${actress.isChecked ? "bg-cyan-100" : "bg-gray-100"} ${actress.isFiltered && "hidden"}`}
      onClick={onClickHandler}
    >
      <div className="flex flex-col h-full">
        <img
          src={imageFile}
          alt={name}
          className={`h-full m-auto ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        />
        <p
          className={`text-center rounded-b-md ${getAttributeColor(actress.attribute)} ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ActressBox;
