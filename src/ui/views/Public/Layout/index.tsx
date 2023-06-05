import { Outlet } from "react-router-dom";
import lp from "./../../../../assets/Home/landing-page.jpeg";

const PublicLayout = () => {
  return (
    <div
      id="home"
      className="w-screen flex flex-col p-10  h-screen bg-cover"
      style={{ backgroundImage: `url(${lp})` }}
    >
      <Outlet />
    </div>
  );
};

export default PublicLayout;
