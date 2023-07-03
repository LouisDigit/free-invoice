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
  error?: boolean;
  required?: boolean;
}

const Input = ({
  name,
  id,
  onChange,
  type,
  label,
  placeholder,
  onLabelClick,
  error,
  required,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label ? (
        <label
          onClick={onLabelClick}
          className="cursor-pointer font-light"
          htmlFor={name}
        >
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
        required={required}
        placeholder={placeholder}
        className={`px-3 py-2  bg-white border rounded-lg  focus:outline-none ${
          error ? "border-red-700" : "border-gray-300"
        }`}
      />
    </div>
  );
};

export default Input;
