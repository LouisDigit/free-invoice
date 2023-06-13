import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import SecondaryButton from "../../../components/Button/SecondaryButton";
import { LoginCredentials } from "../../../../domain/entities/auth-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import lp from "./../../../../assets/Home/landing-page.jpeg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../..";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../../../store/hooks";
import { login } from "../../../../domain/usecases/auth-slice";
import { getLoginError } from "../../../../domain/usecases/error-slice";
import { useAppSelector } from "../../../../store/hooks";
import { setLoading } from "../../../../domain/usecases/loading-slice";
import { resetError } from "../../../../domain/usecases/error-slice";
import {
  resetSuccess,
  setSuccess,
} from "../../../../domain/usecases/success-slice";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const success = useAppSelector((state) => state.success);
  const error = useAppSelector((state) => state.error);
  const provider = new GoogleAuthProvider();

  const [userLogin, setUserLogin] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [enabledButton, setEnabledButton] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setSuccess("You are already connected"));
      }
    });
    if (userLogin.email !== "" && userLogin.password !== "") {
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [userLogin, error]);

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
    dispatch(setLoading(true));
    try {
      await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      ).then((userAuth) => {
        navigate("/user");
      });
      dispatch(setLoading(false));
      setUserLogin({ email: "", password: "" });
    } catch (error: any) {
      const errorCode = error.code;
      dispatch(getLoginError(errorCode));
      dispatch(setLoading(false));
    }
  };

  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          login({
            username: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleNavigate = () => {
    dispatch(resetError());
    dispatch(resetSuccess());
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
            {error.message !== "" ? (
              <span className="w-full text-center text-white bg-red-900 rounded-xl px-5 py-3">
                {error.message}
              </span>
            ) : (
              <></>
            )}
            {success.enabled ? (
              <span className="w-full text-center text-white bg-green-700 rounded-xl px-5 py-3">
                {success.message}
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
              placeholder="Entrez votre email"
              name="email"
              required={true}
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
                required={true}
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
                  onClick={handleNavigate}
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
              <li className="flex-1   bg-red-600 px-5 hover:bg-red-700 py-3 rounded-lg text-white cursor-pointer shadow-2xl">
                <button
                  className="flex justify-center items-center w-full h-full gap-2"
                  onClick={handleSignInWithGoogle}
                >
                  <FontAwesomeIcon icon={faGoogle} className="text-2xl" />{" "}
                  Google
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
