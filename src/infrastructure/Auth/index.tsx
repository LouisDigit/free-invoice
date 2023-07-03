import { auth } from "../..";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { RegisterCredentials } from "../../domain/entities/auth-types";
import { updateProfile } from "firebase/auth";

const authRegister = async (credentials: RegisterCredentials) => {
  const { username, email, password, confirmPassword } = credentials;

  // call firebase signup api
  await createUserWithEmailAndPassword(auth, email, password);
  auth.onAuthStateChanged((user) => {
    if (user) {
      updateProfile(user, {
        displayName: username,
      });
    }
    return user;
  });
};

const checkAuthStatus = () => {
  onAuthStateChanged(auth, (user) => {
    return user ? user : null;
  });
};

const authService = {
  authRegister,
  checkAuthStatus,
};

export default authService;
