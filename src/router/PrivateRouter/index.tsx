import { Routes, Route } from "react-router-dom";
import Dashboard from "../../ui/views/Private/Dashboard";
import PrivateLayout from "../../ui/views/Private/Layout";
import Error from "../../ui/views/_utils/Error";
import Home from "../../ui/views/Public/Home";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouter;
