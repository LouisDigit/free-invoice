import logo from "./../../../assets/Global/La_Note.png";

const Footer = () => {
  return (
    <footer className="flex bg-violet-950  justify-center gap-5 py-12  flex-col px-24">
      <div className="flex w-full items-center justify-center text-white gap-10">
        <img src={logo} alt="logo" className="w-16 bg-white rounded-full" />
        <h2 className="uppercase text-xl">La Note</h2>
      </div>
      <div className="bg-gray-500 w-full h-0.5"></div>
      <div className="flex justify-between w-full text-white opacity-80">
        <p className="text-sm">© 2023 La Note. All rights reserved.</p>
        <ul className="flex gap-5 text-sm">
          <li className="cursor-pointer">Terms</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
