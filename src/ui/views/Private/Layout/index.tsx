import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";
import { useEffect } from "react";
import SideBar from "../../../components/SideBar";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { useAppDispatch } from "../../../../store/hooks";
import { signOut } from "../../../../domain/usecases/auth-slice";

const PrivateLayout = () => {
  const loading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [loading]);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <main className="bg-cover min-h-screen">
      <PrimaryButton
        type="button"
        text="Sign out"
        onClick={handleSignOut}
        cssClass="absolute rounded-lg top-5 right-5"
      />
      {loading.status ? (
        <div className="loader-content">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="flex">
            <SideBar />
            <Outlet />
          </div>
        </>
      )}
    </main>
  );
};

export default PrivateLayout;
