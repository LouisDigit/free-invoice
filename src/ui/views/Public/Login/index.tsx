import React, { useState } from "react";
import Input from "../../../components/Input";
const Login: React.FC = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLabelFocus = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    const htmlForValue = event.currentTarget.getAttribute("for");
    const inputElement = document.querySelector(
      `input[name="${htmlForValue}"]`
    ) as HTMLInputElement;

    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <h1>Login Page</h1>
      <div className="flex gap-3">
        <label
          htmlFor="email"
          onClick={handleLabelFocus}
          className="cursor-pointer"
        >
          Email
        </label>
        <Input type="email" onChange={handleInput} name="email" />
      </div>
      <div className="flex gap-3">
        <label
          htmlFor="password"
          onClick={handleLabelFocus}
          className="cursor-pointer"
        >
          Password
        </label>
        <Input type="password" onChange={handleInput} name="password" />
      </div>
    </form>
  );
};

export default Login;
