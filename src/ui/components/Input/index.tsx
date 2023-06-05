import React from "react";

interface InputProps {
  name: string;
  type: "text" | "email" | "password" | "number" | undefined;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, id, onChange, type }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      id={id}
      className="px-3 py-2 rounded-full"
    />
  );
};

export default Input;
