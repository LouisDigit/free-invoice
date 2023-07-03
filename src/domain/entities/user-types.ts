import { User as UserAuth } from "@firebase/auth-types";

export interface User {
  username: string | null;
  email: string | null;
  id: string;
}

export type AuthUser = UserAuth;
