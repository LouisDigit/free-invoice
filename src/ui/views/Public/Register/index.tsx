import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { RegisterCredentials } from "../../../../domain/entities/auth.types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import lp from "./../../../../assets/Home/landing-page.jpeg";
const Register: React.FC = () => {
  const [credentialRegister, setCredentialRegister] =
    useState<RegisterCredentials>({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const [enabledButton, setEnabledButton] = useState<boolean>(false);

  useEffect(() => {
    if (
      credentialRegister.email !== "" &&
      credentialRegister.password !== "" &&
      credentialRegister.firstname !== "" &&
      credentialRegister.lastname !== "" &&
      credentialRegister.confirmPassword !== ""
    ) {
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [credentialRegister]);

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
    setCredentialRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section
        className="w-full h-screen bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${lp})`, backgroundAttachment: "fixed" }}
      >
        <div className="flex flex-col bg-white shadow-2xl rounded-lg">
          <h1 className="text-center py-5 text-xl uppercase bg-gray-800 text-white rounded-t-lg">
            Register
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-5 py-3 w-[26rem]"
          >
            <Input
              type="text"
              id="firstname"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Firstname"
              placeholder="Entrez votre prénom"
              name="firstname"
            />
            <Input
              type="text"
              id="lastname"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Lastname"
              placeholder="Entrez votre nom"
              name="lastname"
            />
            <Input
              type="email"
              id="email"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Email"
              placeholder="Entrez votre email"
              name="email"
            />
            <Input
              type="password"
              id="password"
              placeholder="Entrez votre password"
              onLabelClick={handleLabelFocus}
              label="Password"
              onChange={handleInput}
              name="password"
            />
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirmez votre password"
              onLabelClick={handleLabelFocus}
              label="Confirm password"
              onChange={handleInput}
              name="confirmPassword"
            />

            <SecondaryButton
              text="Register"
              type="submit"
              disabled={enabledButton}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
