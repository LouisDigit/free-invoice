import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import lp from "./../../../../assets/Home/landing-page.jpeg";

const PublicLayout = () => {
  const loading = useAppSelector((state) => state.loading);

  useEffect(() => {}, [loading]);
  return (
    <main
      className="bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${lp})`,
        backgroundAttachment: "fixed",
      }}
    >
      {loading.status ? (
        <div className="loader-content">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </main>
  );
};

export default PublicLayout;
