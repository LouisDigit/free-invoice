import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  cssClass?: string;
  logo?: IconDefinition;
}

const SecondaryButton = ({
  text,
  onClick,
  cssClass,
  type,
  disabled,
  logo,
}: SecondaryButtonProps) => {
  const buttonClasses = `${
    cssClass ? cssClass : ""
  } px-4 py-2   flex gap-3 items-center justify-center rounded-lg ${
    disabled
      ? "bg-gray-500 border-gray-500 cursor-not-allowed "
      : "border text-black bg-white hover:bg-gray-100"
  }`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {logo ? <FontAwesomeIcon icon={logo} /> : <></>}

      {text}
    </button>
  );
};

export default SecondaryButton;
