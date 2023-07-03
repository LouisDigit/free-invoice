interface HeaderLinkProps {
  text: string;
  onClick?: () => void;
}

const HeaderLink = ({ text, onClick }: HeaderLinkProps) => {
  return (
    <li
      onClick={onClick}
      className="rounded-full px-4 py-2 text-lg text-black ease-out duration-300  cursor-pointer hover:text-gray-900"
    >
      {text}
    </li>
  );
};

export default HeaderLink;
