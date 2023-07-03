import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";
import AuthGuard from "./infrastructure/Auth/AuthGuard";
import PrivateRouter from "./router/PrivateRouter";
import "./index.css";
import { auth } from ".";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  authSelector,
  checkUserStatus,
  setLogin,
  signIn,
} from "./domain/usecases/auth-slice";
import { authLoading } from "./domain/usecases/auth-slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setLogin({
            username: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          <Route
            path="/user/*"
            element={
              <AuthGuard>
                <PrivateRouter />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
