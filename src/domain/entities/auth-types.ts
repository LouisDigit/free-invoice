import { SerializedError } from "@reduxjs/toolkit";
import { User } from "./user-types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const ERRORS_KEYS = [
  "auth/network-request-failed",
  "auth/user-not-found",
  "auth/wrong-password",
] as const;

export interface AuthState {
  user: null | User;
  loading: null | boolean;
  errors: null | string | SerializedError;
  accessToken: null | string;
  authenticated: boolean;
}
