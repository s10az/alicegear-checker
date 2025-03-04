import { Github, ChevronUp } from "lucide-react";
import { lastUpdated } from "@/globals";

const Footer = () => {
  return (
    <>
      <p className="text-center my-4">
        <a href="#">
          <ChevronUp className="w-6 h-6 inline-block" />
        </a>
      </p>

      <p className="text-center my-4">
        <Github className="w-4 h-4 inline-block align-text-bottom mr-1" />
        <a
          href="https://github.com/s10az/alicegear-checker/"
          className="text-blue-500 visited:text-purple-500 underline"
        >
          ソースコード
        </a>
        <br />
        最終更新日:
        <time dateTime={`${lastUpdated.replaceAll("/", "-")}`}>
          {lastUpdated}
        </time>
      </p>
    </>
  );
};

export default Footer;
