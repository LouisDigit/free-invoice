import logo from "./../../../assets/Global/La_Note.png";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { signOut } from "../../../domain/usecases/auth-slice";
import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import HeaderLink from "./Link";

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [user]);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleNavigate = () => {};

  const handleDashboard = () => {
    navigate("/user");
  };

  return (
    <header className="flex w-screen justify-between items-center px-10 z-40 bg-white fixed ease-out duration-300">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-24" />
        <h1 className="font-black text-xl">La Note</h1>
      </Link>

      <ul className="flex gap-3 z-10">
        {location.pathname !== "/login" && !user ? (
          <Link to="/login">
            <HeaderLink text="Login" onClick={handleNavigate} />
          </Link>
        ) : (
          <></>
        )}
        {location.pathname !== "/register" && !user ? (
          <Link to="/register">
            <HeaderLink text="Register" onClick={handleNavigate} />
          </Link>
        ) : (
          ""
        )}
        {user !== null ? (
          <>
            <HeaderLink text="SignOut" onClick={handleSignOut} />
            {location.pathname !== "/user" && user ? (
              <Link to="/user">
                <HeaderLink text="Dashboard" onClick={handleDashboard} />
              </Link>
            ) : (
              <></>
            )}
          </>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
};

export default Header;
