import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { LoginCredentials } from "../../../../domain/entities/auth-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../..";
import { useAppDispatch } from "../../../../store/hooks";
import { useAppSelector } from "../../../../store/hooks";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signIn } from "../../../../domain/usecases/auth-slice";
import { isUserAuthenticatedSelector } from "../../../../domain/usecases/auth-slice";
import { authLoading } from "../../../../domain/usecases/auth-slice";
import { authError } from "../../../../domain/usecases/auth-slice";
import logo from "./../../../../assets/Global/La_Note.png";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword: React.FC = () => {
  const loading = useAppSelector(authLoading);
  const error = useAppSelector(authError);
  const [emailResetPassword, setEmailResetPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("Forgot Passworc !");
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailResetPassword(event.target.value);
  };

  return (
    <>
      <section className="w-full h-screen bg-cover flex justify-center items-center bg-white">
        {loading ? (
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="flex flex-col rounded-lg items-center sm:px-5 md:px-0 w-full">
            <Link to="/">
              <img src={logo} alt="logo_la_note" className="w-32" />
            </Link>
            <h1 className="text-3xl font-semibold">Forgot password?</h1>
            <h6 className="text-md font-light my-5">
              No worries, we’ll send you reset instructions.
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
                type="email"
                id="email"
                onChange={handleInput}
                label="Email"
                placeholder="Enter your email"
                name="email"
                required={true}
              />

              <SecondaryButton
                text="Reset password"
                type="submit"
                cssClass="rounded-lg"
              />
            </form>
            <Link
              to="/login"
              className="text-center mt-5 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
              Back to log in
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default ForgotPassword;
