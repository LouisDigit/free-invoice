import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { RegisterCredentials } from "../../../../domain/entities/auth-types";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../..";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getRegisterError,
  resetError,
} from "../../../../domain/usecases/error-slice";
import { setSuccess } from "../../../../domain/usecases/success-slice";
import { setLoading } from "../../../../domain/usecases/loading-slice";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.error);

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
  }, [credentialRegister, error]);

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
    e.preventDefault();
    dispatch(setLoading(true));

    const { firstname, lastname, email, password, confirmPassword } =
      credentialRegister;

    if (password !== confirmPassword) {
      dispatch(getRegisterError("auth/match-password"));
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        updateProfile(user, {
          displayName: firstname + " " + lastname,
        });
        dispatch(setLoading(false));

        if (user && user.email) {
          dispatch(resetError());
          dispatch(setSuccess("User has been registered"));
          navigate("/user");
        }
      } catch (error: any) {
        const errorCode = error.code;
        await dispatch(getRegisterError(errorCode));
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col bg-white shadow-2xl rounded-lg">
          <h1 className="text-center py-5 text-xl uppercase bg-gray-800 text-white rounded-t-lg">
            Register Form
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-5 py-3 w-[26rem]"
          >
            {error.message !== "" ? (
              <span className="w-full text-center text-white bg-red-900 rounded-xl px-5 py-3">
                {error.message}
              </span>
            ) : (
              <></>
            )}

            <Input
              type="text"
              id="firstname"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Firstname"
              placeholder="Entrez votre prénom"
              name="firstname"
              required={true}
            />
            <Input
              type="text"
              id="lastname"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Lastname"
              placeholder="Entrez votre nom"
              name="lastname"
              required={true}
            />
            <Input
              type="email"
              id="email"
              onLabelClick={handleLabelFocus}
              onChange={handleInput}
              label="Email"
              placeholder="Entrez votre email"
              name="email"
              error={error.code === "auth/email-already-in-use" ? true : false}
              required={true}
            />
            <Input
              type="password"
              id="password"
              placeholder="Entrez votre password"
              onLabelClick={handleLabelFocus}
              label="Password"
              onChange={handleInput}
              name="password"
              error={
                error.code === "auth/weak-password" ||
                error.code === "auth/match-password"
                  ? true
                  : false
              }
              required={true}
            />
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirmez votre password"
              onLabelClick={handleLabelFocus}
              label="Confirm password"
              onChange={handleInput}
              name="confirmPassword"
              error={
                error.code === "auth/weak-password" ||
                error.code === "auth/match-password"
                  ? true
                  : false
              }
              required={true}
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
