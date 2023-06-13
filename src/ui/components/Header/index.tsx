import logo from "./../../../assets/Global/La_Note.png";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { logout } from "../../../domain/usecases/auth-slice";
import { useAppSelector } from "../../../store/hooks";
import { useAppDispatch } from "../../../store/hooks";
import { resetError } from "../../../domain/usecases/error-slice";
import { resetSuccess } from "../../../domain/usecases/success-slice";
import { auth } from "../../..";
import { useNavigate } from "react-router-dom";

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
    dispatch(logout());
    signOut(auth);
    navigate("/");
  };

  const handleNavigate = () => {
    dispatch(resetError());
    dispatch(resetSuccess());
  };

  const handleDashboard = () => {
    navigate("/user");
  };

  const headerStyle = {
    backgroundColor: isScrolled
      ? "rgba(255,255,255,1)"
      : "rgba(255,255,255,0.1)",
    color: isScrolled ? "#333" : "#fff",
  };

  return (
    <header
      className="flex bg-transparent w-screen justify-between items-center px-10  fixed ease-out duration-300"
      style={headerStyle}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-32 h-32" />
      </Link>

      <ul className="flex gap-3 z-10">
        {location.pathname !== "/login" && !user ? (
          <li>
            <Link to="/login">
              <PrimaryButton
                text="Login"
                type="button"
                onClick={handleNavigate}
              />
            </Link>
          </li>
        ) : (
          ""
        )}
        {location.pathname !== "/register" && !user ? (
          <li>
            <Link to="/register">
              <SecondaryButton
                text="Register"
                type="button"
                onClick={handleNavigate}
              />
            </Link>
          </li>
        ) : (
          ""
        )}
        {user !== null ? (
          <>
            <li>
              <PrimaryButton
                text="Sign Out"
                onClick={handleSignOut}
                type="button"
              />
            </li>
            {location.pathname !== "/user" ? (
              <li>
                <SecondaryButton
                  text="Dashboard"
                  onClick={handleDashboard}
                  type="button"
                />
              </li>
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
