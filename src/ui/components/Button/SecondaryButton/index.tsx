import React from "react";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  cssClass?: string;
}

const SecondaryButton = ({
  text,
  onClick,
  cssClass,
  type,
  disabled,
}: SecondaryButtonProps) => {
  const buttonClasses = `${cssClass ? cssClass : ""} px-4 py-2   text-white ${
    disabled
      ? "bg-gray-500 border-gray-500 cursor-not-allowed"
      : "hover:bg-blue-800 bg-blue-700"
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

export default SecondaryButton;
