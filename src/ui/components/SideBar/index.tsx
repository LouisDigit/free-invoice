import { Link } from "react-router-dom";
import logo from "./../../../assets/Global/La_Note.png";
import SideBarLink from "./Link";
import Input from "../Input";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const links = [
    {
      label: "Dashboard",
      link: "/",
      logo: faHouse,
    },
    {
      label: "Client",
      link: "/user",
      logo: faHouse,
    },
    {
      label: "Creation",
      link: "/user",
      logo: faHouse,
    },
    {
      label: "Resume",
      link: "/user",
      logo: faHouse,
    },
    {
      label: "Setting",
      link: "/user",
      logo: faHouse,
    },
  ];

  return (
    <div className="h-screen  bg-white shadow-2xl w-80 flex flex-col px-2">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-24" />
        <h1 className="font-black text-xl text-black whitespace-nowrap">
          La Note
        </h1>
      </Link>
      <Input type="text" placeholder="Search..." name="search" />
      <ul className="flex flex-col  gap-3 self-center w-full mt-5">
        {links.map((link) => {
          return (
            <SideBarLink text={link.label} link={link.link} logo={link.logo} />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
