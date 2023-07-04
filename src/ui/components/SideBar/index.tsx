import { Link } from "react-router-dom";
import logo from "./../../../assets/Global/La_Note.png";
import SideBarLink from "./Link";
import Input from "../Input";
import {
  faHouse,
  faFile,
  faPaintBrush,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../../store/hooks";
import { authSelector } from "../../../domain/usecases/auth-slice";

const SideBar = () => {
  const user = useAppSelector(authSelector);

  const links = [
    {
      label: "Dashboard",
      link: "/",
      logo: faHouse,
    },
    {
      label: "Client",
      link: "/user",
      logo: faUser,
    },
    {
      label: "Creation",
      link: "/user",
      logo: faPaintBrush,
    },
    {
      label: "Resume",
      link: "/user",
      logo: faFile,
    },
    {
      label: "Setting",
      link: "/user",
      logo: faGear,
    },
  ];

  return (
    <div className="h-screen  bg-white shadow-2xl w-80 flex flex-col px-2">
      <div className="flex flex-col basis-1/4">
        <Link to="/" className="flex items-center self-start ">
          <img src={logo} alt="logo" className="w-24" />
          <h1 className="font-black text-xl text-black whitespace-nowrap">
            La Note
          </h1>
        </Link>
        <Input type="text" placeholder="Search..." name="search" />
      </div>

      <ul className="flex flex-col  gap-3  w-full  self-center basis-2/4">
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
