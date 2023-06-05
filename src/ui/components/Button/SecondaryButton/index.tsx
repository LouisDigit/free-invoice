import React from "react";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

const SecondaryButton = ({ text, onClick, type }: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
