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

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const authenticated = useAppSelector(isUserAuthenticatedSelector);
  const loading = useAppSelector(authLoading);
  const error = useAppSelector(authError);

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
  }, [userLogin, authenticated, loading]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signIn(userLogin));
  };

  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  if (authenticated) {
    navigate("/user");
  }

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

            <h1 className="text-3xl font-semibold">Log in to your account</h1>
            <h6 className="text-md font-light my-5">
              Welcome back! Please enter your details.
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
                onLabelClick={handleLabelFocus}
                onChange={handleInput}
                label="Email"
                placeholder="Enter your email"
                name="email"
                required={true}
              />
              <div className="flex flex-col">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onLabelClick={handleLabelFocus}
                  label="Password"
                  onChange={handleInput}
                  name="password"
                  required={true}
                />
                <Link
                  to="/forgotPassword"
                  className="text-blue-500 self-end mt-2  hover:text-blue-600  w-fit text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <SecondaryButton
                text="Sign In"
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
              <span className="text-center mt-5">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500   hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </span>
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
