import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router-dom";
interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const currentUser = useAppSelector((state) => state.auth.user);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default AuthGuard;
