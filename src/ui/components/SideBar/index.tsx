import { Link } from "react-router-dom";
import logo from "./../../../assets/Global/La_Note.png";
import SideBarLink from "./Link";

const SideBar = () => {
  const links = [
    {
      label: "Dashboard",
    },
    {
      label: "Client",
    },
    {
      label: "Creation",
    },
    {
      label: "Resume",
    },
    {
      label: "Setting",
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
      <ul className="flex flex-col  gap-3 self-center w-full">
        {links.map((link) => {
          return <SideBarLink text={link.label} />;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
