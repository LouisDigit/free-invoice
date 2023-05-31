import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import Home from "../ui/views/Public/Home";
import Login from "../ui/views/Public/Login";
import Register from "../ui/views/Public/Register";
import Dashboard from "../ui/views/Private/Dashboard";
import { createMemoryHistory } from "history";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/user",
    element: <Dashboard />,
  },
]);
