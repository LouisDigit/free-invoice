import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton = ({ text, onClick, type }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full px-4 py-2 bg-red-700 border border-red-700 hover:bg-red-800 ease-out duration-300 text-white"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
