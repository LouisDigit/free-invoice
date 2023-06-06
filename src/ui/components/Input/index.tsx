import React from "react";

interface InputProps {
  name: string;
  type: "text" | "email" | "password" | "number" | undefined;
  id?: string;
  placeholder?: string;
  onLabelClick?: (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => void;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  id,
  onChange,
  type,
  label,
  placeholder,
  onLabelClick,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label onClick={onLabelClick} className="cursor-pointer" htmlFor={name}>
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className="px-3 py-2  bg-white border-b-2 border-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default Input;
