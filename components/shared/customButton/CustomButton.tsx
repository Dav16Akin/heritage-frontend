"use client";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "./types";

const CustomButton = ({ text, variant, className }: ButtonProps) => {
  const isBlue = variant === "blue";
  const isWhite = variant === "white";

  return (
    <div
      className={`
        group relative flex items-center gap-4 justify-center p-2 overflow-hidden
        rounded-full w-fit cursor-pointer select-none
        ${isBlue ? "bg-[#9b1c1c]" : ""}
        ${isWhite ? "bg-white" : ""}
        ${className ?? ""}
      `}
    >
      {/* Spread fill layer — scales from left to right on hover */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-0 rounded-full origin-left scale-x-0
          group-hover:scale-x-100 transition-transform duration-500 ease-in-out
          ${isBlue ? "bg-[#0a1628]" : ""}
          ${isWhite ? "bg-[#9b1c1c]" : ""}
        `}
      />

      {/* Label */}
      <span
        className={`
          relative z-10 px-2 font-medium transition-colors duration-300
          ${isBlue ? "text-white" : ""}
          ${isWhite ? "text-black group-hover:text-white" : ""}
        `}
      >
        {text}
      </span>

      {/* Arrow circle */}
      <div
        className={`
          relative z-10 rounded-full p-1 flex-1 transition-colors duration-300
          ${isBlue ? "bg-[#0a1628] text-white group-hover:bg-[#9b1c1c]" : ""}
          ${isWhite ? "bg-[#9b1c1c] text-white group-hover:bg-white group-hover:text-[#9b1c1c]" : ""}
        `}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default CustomButton;
