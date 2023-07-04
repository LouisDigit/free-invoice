import logo from "./../../../assets/Global/La_Note.png";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { signOut } from "../../../domain/usecases/auth-slice";
import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import HeaderLink from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
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
  }, [user, toggleMenu]);

  const headerClass = isScrolled ? "bg-white" : "bg-transparent";

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  const handleNavigate = () => {};

  const handleDashboard = () => {
    navigate("/user");
  };

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className={`flex flex-col w-screen fixed top-0 left-0  md:px-16 z-40 bg-transparent  ease-out duration-300 ${headerClass}`}
    >
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-24" />
          <h1 className="font-tiny text-xl uppercase">La Note</h1>
        </Link>
        {!toggleMenu ? (
          <FontAwesomeIcon
            icon={faBars}
            className="text-black text-2xl block md:hidden mr-5"
            onClick={handleMenu}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-black text-2xl block md:hidden mr-5"
            onClick={handleMenu}
          />
        )}

        <ul className=" gap-3 z-10  hidden md:flex">
          {location.pathname !== "/login" && !user ? (
            <Link to="/login">
              <HeaderLink text="Log in" onClick={handleNavigate} />
            </Link>
          ) : (
            <></>
          )}
          {location.pathname !== "/register" && !user ? (
            <Link to="/register">
              <PrimaryButton text="Sign up" type="button" />
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
      </div>

      <ul
        className={`${
          toggleMenu ? "flex md:hidden" : "hidden"
        } w-full items-center gap-3 py-3 bg-white  flex-col `}
      >
        <li className="w-full px-5">
          <Link
            to="/login"
            className="text-center hover:bg-gray-100 border px-4 py-2 w-full flex items-center justify-center bg-white rounded-lg"
          >
            Log in
          </Link>
        </li>
        <li className="w-full px-5">
          <Link
            to="/register"
            className="text-center hover:bg-violet-800 border px-4 py-2 w-full flex items-center justify-center bg-violet-800 text-white rounded-lg"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
