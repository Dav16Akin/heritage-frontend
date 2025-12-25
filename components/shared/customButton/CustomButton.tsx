import { ArrowRight } from "lucide-react";
import { ButtonProps } from "./types";

const CustomButton = ({ text, variant }: ButtonProps) => {
  return (
    <div
      className={`flex items-center gap-4 justify-center p-2 ${
        variant == "blue" ? "bg-blue-700" : ""
      }  ${variant == "white" ? "bg-white" : ""}  rounded-full w-fit`}
    >
      <span
        className={`${variant == "blue" ? "text-white" : ""} ${
          variant == "white" ? "text-black" : ""
        }`}
      >
        {text}
      </span>

      <div
        className={`${variant == "blue" ? "text-black bg-white " : ""} ${
          variant == "white" ? "text-white bg-blue-700" : ""
        } rounded-full h-full w-full p-1 flex-1`}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default CustomButton;
