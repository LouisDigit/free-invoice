import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarLinkProps {
  text: string;
  onClick?: () => void;
}

const SideBarLink = ({ text, onClick }: SideBarLinkProps) => {
  return (
    <li
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm justify-between flex items-center text-black ease-out duration-300  cursor-pointer hover:text-gray-900"
    >
      <span className="self-center">{text}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </li>
  );
};

export default SideBarLink;
