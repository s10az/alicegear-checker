import { Github } from "lucide-react";

const Footer = () => {
  return (
    <>
      <p className="text-center my-4">
        <Github className="w-4 h-4 inline-block align-text-bottom mr-1" />
        <a
          href="https://github.com/s10az/alicegear-checker/"
          className="text-blue-500 visited:text-purple-500 underline"
        >
          ソースコード
        </a>
      </p>
    </>
  );
};

export default Footer;
