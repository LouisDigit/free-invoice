import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./router/PublicRouter";
import AuthGuard from "./infrastructure/Auth/AuthGuard";
import PrivateRouter from "./router/PrivateRouter";
import "./index.css";
import { auth } from ".";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { login, logout } from "./domain/usecases/auth-slice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            email: authUser.email,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
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
