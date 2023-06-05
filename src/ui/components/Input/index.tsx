import React from "react";

interface InputProps {
  name: string;
  type: "text" | "email" | "password" | "number" | undefined;
  id?: string;
  placeholder?: string;
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
}: InputProps) => {
  return (
    <div className="flex gap-3 items-center">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <input
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className="px-3 py-2 rounded-full"
      />
    </div>
  );
};

export default Input;
