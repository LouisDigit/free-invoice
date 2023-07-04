interface HeaderLinkProps {
  text: string;
  onClick?: () => void;
}

const HeaderLink = ({ text, onClick }: HeaderLinkProps) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-lg text-violet-950 hover:bg-white border border-transparent hover:border-slate-200 rounded-lg ease-out duration-500  cursor-pointer hover:text-purple-800"
    >
      {text}
    </li>
  );
};

export default HeaderLink;
