import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SideBarLinkProps {
  text: string;
  onClick?: () => void;
  link?: string;
  logo: IconDefinition;
}

const SideBarLink = ({ text, onClick, link, logo }: SideBarLinkProps) => {
  return (
    <Link to={link ? link : "/user"}>
      <li
        onClick={onClick}
        className="rounded-full px-4 py-2 text-sm justify-between flex items-center text-black ease-out duration-300  cursor-pointer hover:text-gray-900"
      >
        {" "}
        <span className="self-center flex gap-2 items-center">
          <FontAwesomeIcon icon={logo} />
          {text}
        </span>
        <FontAwesomeIcon icon={faChevronDown} />
      </li>
    </Link>
  );
};

export default SideBarLink;
