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
      <Input
        type="email"
        onLabelClick={handleLabelFocus}
        onChange={handleInput}
        label="Email"
        placeholder="Entrez votre email"
        name="email"
      />

      <Input
        type="password"
        placeholder="Entrez votre password"
        onLabelClick={handleLabelFocus}
        label="Password"
        onChange={handleInput}
        name="password"
      />
    </form>
  );
};

export default Login;
