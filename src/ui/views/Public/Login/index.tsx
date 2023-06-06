import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { LoginCredentials } from "../../../../domain/entities/auth.types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import lp from "./../../../../assets/Home/landing-page.jpeg";
import Footer from "../../../components/Footer";
const Login: React.FC = () => {
  const [userLogin, setUserLogin] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [enabledButton, setEnabledButton] = useState<boolean>(false);

  useEffect(() => {
    if (userLogin.email !== "" && userLogin.password !== "") {
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [userLogin]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userLogin);
  };

  return (
    <>
      <section
        className="w-full h-screen bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${lp})`, backgroundAttachment: "fixed" }}
      >
        <div className="flex flex-col bg-white shadow-2xl rounded-lg">
          <h1 className="text-center py-5 text-xl uppercase bg-gray-800 text-white rounded-t-lg">
            Login
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-5 py-3 w-[26rem]"
          >
            <Input
              type="email"
              id="email"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Email"
              placeholder="Entrez votre email"
              name="email"
            />
            <div className="flex flex-col">
              <Input
                type="password"
                id="password"
                placeholder="Entrez votre password"
                onLabelClick={handleLabelFocus}
                label="Password"
                onChange={handleInput}
                name="password"
              />
              <Link
                to="/"
                className="text-blue-500 border-b border-b-blue-400 hover:text-blue-600 hover:border-b-blue-600 w-fit text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex flex-col">
              <SecondaryButton
                text="Login"
                type="submit"
                disabled={enabledButton}
              />
              <span className="text-sm">
                New to our plateform?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 border-b border-b-blue-500 hover:text-blue-600 hover:border-b-blue-600 "
                >
                  Sign up
                </Link>
              </span>
            </div>
            <span className="rounded-full shadow-2xl flex items-center justify-center  self-center cursor-pointer hover:bg-gray-100 w-16 h-16">
              Or
            </span>
            <ul className="flex gap-2">
              <li className="flex-1 flex justify-center items-center gap-2 text-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white cursor-pointer shadow-2xl">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />{" "}
                Facebook
              </li>
              <li className="flex-1 flex justify-center items-center gap-2 bg-red-600 px-5 hover:bg-red-700 py-3 rounded-lg text-white cursor-pointer shadow-2xl">
                <FontAwesomeIcon icon={faGoogle} className="text-2xl" /> Google
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
