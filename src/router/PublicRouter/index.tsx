import { Routes, Route } from "react-router-dom";
import Home from "../../ui/views/Public/Home";
import Login from "../../ui/views/Public/Login";
import Register from "../../ui/views/Public/Register";
import Error from "../../ui/views/_utils/Error";
import PublicLayout from "../../ui/views/Public/Layout";
import ForgotPassword from "../../ui/views/Public/ForgotPassword";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
