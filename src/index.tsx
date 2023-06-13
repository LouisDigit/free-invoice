import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./infrastructure/Firebase/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import App from "./App";

const app = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
