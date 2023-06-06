import logo from "./../../../assets/Global/La_Note.png";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();

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
  }, []);

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
        {location.pathname !== "/login" ? (
          <li>
            <Link to="/login">
              <PrimaryButton text="Login" type="button" />
            </Link>
          </li>
        ) : (
          ""
        )}
        {location.pathname !== "/register" ? (
          <li>
            <Link to="/register">
              <SecondaryButton text="Register" type="button" />
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
};

export default Header;
