import Home from "../../ui/views/Public/Home";
import Login from "../../ui/views/Public/Login";
import Register from "../../ui/views/Public/Register";

export const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
