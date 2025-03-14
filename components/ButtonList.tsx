import { useRef } from "react";
import { useAtom } from "jotai";
import { ActressType } from "@/types/actress";
import { allActressAtom } from "@/atoms";
import { Upload, Download, RotateCcw } from "lucide-react";
import { format } from "date-fns";

const signature: string = "# Exported by alicegear-checker";

const ButtonList = () => {
  const [allActressState, setAllActressState] =
    useAtom<ActressType[]>(allActressAtom);
  const actressCheckedNum: number = allActressState.filter(
    (actress) => actress.isChecked,
  ).length;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImport = () => {
    inputRef?.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Import CSV file
    // https://zenn.dev/dove/articles/1927889e1c4153

    if (!event.target.files) return;
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        const csvString = reader.result as string;
        // console.log(csvString);

        const csvSignature = csvString.split("\n")[0];

        if (csvSignature != signature) {
          window.alert(`CSVファイルの形式が正しくありません (${file.name})`);
          return;
        }

        setStateByCsv(csvString);
      }
    };

    reader.readAsText(file);
  };

  const handleExport = () => {
    // Download CSV file
    // https://zenn.dev/milkandhoney995/articles/f177a279a15d0e

    const checkedActress: ActressType[] = allActressState.filter(
      (actress) => actress.isChecked,
    );

    const idString: string = checkedActress
      .map((actress) => actress.id)
      .join("\n");

    const csvContent: string = signature + "\n# id\n" + idString;

    const currentDate: string = format(new Date(), "yyyy-MM-dd");
    const fileName: string = currentDate + "-alicegear-checker-export.csv";

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const setStateByCsv = (csvString: string) => {
    const strArray: string[] = csvString.split("\n");
    const arrayLength: number = strArray.length;

    // reset all isChecked value to false
    setAllActressState((prevState) =>
      prevState.map((actress) => ({ ...actress, isChecked: false })),
    );

    let importedActressNum: number = 0;

    for (let i: number = 0; i < arrayLength; i++) {
      if (i == 0 || i == 1) {
        continue;
      }

      const id: string = strArray[i];

      setAllActressState((prevState) =>
        prevState.map((actress) => {
          if (actress.id === id) {
            importedActressNum++;
            return { ...actress, isChecked: true };
          }

          return actress;
        }),
      );
    }

    window.alert(
      `CSVファイルからアクトレス(${importedActressNum}人)の選択状態をインポートしました`,
    );
  };

  return (
    <>
      <div className="text-sm sm:text-base flex flex-wrap justify-center gap-4 my-4">
        <button
          onClick={handleImport}
          className="bg-blue-300 disabled:bg-gray-300 border border-gray-500 rounded px-1 py-1"
          title="アクトレスの選択状態のCSVファイルをインポートします"
        >
          <input
            hidden
            ref={inputRef}
            onChange={handleFileImport}
            type="file"
            accept="text/csv"
          ></input>
          <Upload className="w-4 h-4 inline-block align-text-top mr-1" />
          インポート
        </button>

        <button
          onClick={handleExport}
          className="bg-red-300 disabled:bg-gray-300 border border-gray-500 rounded px-1 py-1"
          disabled={actressCheckedNum > 0 ? false : true}
          title="アクトレスの選択状態をCSVファイルとしてエクスポートします"
        >
          <Download className="w-4 h-4 inline-block align-text-top mr-1" />
          エクスポート
        </button>

        <button
          onClick={handleReset}
          className="bg-green-300 disabled:bg-gray-300 border border-gray-500 rounded px-1 py-1"
          disabled={actressCheckedNum > 0 ? false : true}
          title="アクトレスの選択状態を解除します"
        >
          <RotateCcw className="w-4 h-4 inline-block align-text-top mr-1" />
          リセット
        </button>
      </div>
    </>
  );
};

export default ButtonList;
