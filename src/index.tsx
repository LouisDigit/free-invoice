import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const store = configureStore({
  reducer: reducer,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);

reportWebVitals();
