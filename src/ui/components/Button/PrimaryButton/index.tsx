import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  cssClass?: string;
}

const PrimaryButton = ({
  text,
  onClick,
  type,
  disabled,
  cssClass,
}: PrimaryButtonProps) => {
  const buttonClasses = ` ${
    cssClass ? cssClass : ""
  } px-4 py-2  border   ease-out duration-300 text-white ${
    disabled
      ? "bg-gray-500 border-gray-500 cursor-not-allowed"
      : "hover:bg-red-800 border-red-700 bg-red-700"
  }`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
