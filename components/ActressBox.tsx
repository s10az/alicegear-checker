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
      className={`border border-gray-500 rounded-md w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] ${actress.isChecked ? "bg-cyan-100" : "bg-gray-100 dark:bg-gray-600"} ${actress.isFiltered && "hidden"}`}
      onClick={onClickHandler}
    >
      <div className="flex flex-col">
        <div
          className={`h-[calc(110px-15px-2px)] sm:h-[calc(150px-20px-2px)] mx-auto ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        >
          {actress.image ? (
            <img src={imageFile} alt={name} className="h-full" />
          ) : (
            <span className="dark:text-black flex items-center h-full">
              No Image
            </span>
          )}
        </div>
        <p
          className={`text-[10px] sm:text-sm dark:text-black h-[15px] sm:h-[20px] text-center rounded-b-md ${getAttributeColor(actress.attribute)} ${actress.isChecked ? "opacity-100" : "opacity-50"}`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ActressBox;
