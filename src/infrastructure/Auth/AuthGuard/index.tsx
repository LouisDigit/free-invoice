import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router-dom";
import {
  authSelector,
  isUserAuthenticatedSelector,
} from "../../../domain/usecases/auth-slice";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const authenticated = useAppSelector(isUserAuthenticatedSelector);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default AuthGuard;
