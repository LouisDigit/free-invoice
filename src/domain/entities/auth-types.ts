import { User } from "./user-types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  user: null | User;
}