import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { RegisterCredentials } from "../../../../domain/entities/auth-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks";
import { authError, authLoading } from "../../../../domain/usecases/auth-slice";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  isUserAuthenticatedSelector,
  signUp,
} from "../../../../domain/usecases/auth-slice";
import { useAppSelector } from "../../../../store/hooks";
import logo from "./../../../../assets/Global/La_Note.png";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(isUserAuthenticatedSelector);
  const loading = useAppSelector(authLoading);
  const error = useAppSelector(authError);

  const [credentialRegister, setCredentialRegister] =
    useState<RegisterCredentials>({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const [enabledButton, setEnabledButton] = useState<boolean>(false);

  useEffect(() => {
    if (
      credentialRegister.email !== "" &&
      credentialRegister.password !== "" &&
      credentialRegister.username !== "" &&
      credentialRegister.confirmPassword !== ""
    ) {
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [credentialRegister, authenticated, loading, error]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    dispatch(signUp(credentialRegister));
  };

  if (authenticated) {
    navigate("/user");
  }

  const handleSignInWithGoogle = async () => {
    console.log("connect with google");
  };

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        {loading ? (
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="flex flex-col rounded-lg items-center sm:px-5 md:px-0 w-full">
            <Link to="/">
              <img src={logo} alt="logo_la_note" className="w-32" />
            </Link>

            <h1 className="text-3xl font-semibold">Create an account</h1>
            <h6 className="text-md font-light my-5">
              Start your 30-day free trial.
            </h6>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 px-5 py-3 sm:w-full lg:w-[26rem] w-full"
            >
              {error ? (
                <span className="text-white bg-red-500 text-center py-2 rounded-lg">
                  {error.toString()}
                </span>
              ) : (
                <></>
              )}

              <Input
                type="text"
                id="username"
                onLabelClick={handleLabelFocus}
                onChange={handleInput}
                label="Username*"
                placeholder="Enter your username"
                name="username"
                required={true}
              />
              <Input
                type="email"
                id="email"
                onLabelClick={handleLabelFocus}
                onChange={handleInput}
                label="Email*"
                placeholder="Entrez votre email"
                name="email"
                required={true}
              />
              <Input
                type="password"
                id="password"
                placeholder="Entrez votre password"
                onLabelClick={handleLabelFocus}
                label="Password*"
                onChange={handleInput}
                name="password"
                required={true}
              />
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirmez votre password*"
                onLabelClick={handleLabelFocus}
                label="Confirm password"
                onChange={handleInput}
                name="confirmPassword"
                required={true}
              />

              <SecondaryButton
                text="Register"
                type="submit"
                disabled={enabledButton}
                cssClass="rounded-lg"
              />
              <button
                className="flex justify-center items-center w-full h-full gap-2 bg-red-600  hover:bg-red-700 px-5 py-2 text-white rounded-lg"
                onClick={handleSignInWithGoogle}
              >
                <FontAwesomeIcon icon={faGoogle} className="text-2xl" /> Sign in
                with Google
              </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default Register;
