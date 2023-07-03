import { Dispatch, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PayloadAction,
  SerializedError,
  createSelector,
} from "@reduxjs/toolkit";
import { User } from "../entities/user-types";
import { updateProfile } from "firebase/auth";
import { RootState } from "../..";
import {
  AuthState,
  LoginCredentials,
  RegisterCredentials,
} from "../entities/auth-types";
import { auth } from "../..";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import authService from "../../infrastructure/Auth";

export const checkUserStatus = createAsyncThunk("auth/checkAuth", () => {
  return authService.checkAuthStatus();
});

export const signUp = createAsyncThunk(
  "signup",
  async (req: RegisterCredentials, thunkAPI) => {
    const { username, email, password, confirmPassword } = req;

    if (password !== confirmPassword) {
      console.log("hello");
      return thunkAPI.rejectWithValue({ error: "passwords don't matched" });
    }

    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(authUser.user, {
        displayName: username,
      });
      const user = {
        username: authUser.user.displayName,
        email: authUser.user.email,
        id: authUser.user.uid,
      };
      return user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const signIn = createAsyncThunk(
  "signin",
  async (req: LoginCredentials, thunkAPI) => {
    const { email, password } = req;

    try {
      const authUser = await signInWithEmailAndPassword(auth, email, password);
      const user = {
        username: authUser.user.displayName,
        email: authUser.user.email,
        id: authUser.user.uid,
      };
      return user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const signOut = createAsyncThunk("signOut", async (_, thunkAPI) => {
  try {
    await auth.signOut();
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

// export const handleRegister = createAsyncThunk()

const initialState: AuthState = {
  user: null,
  loading: false,
  errors: null,
  accessToken: null,
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.errors = null;
      state.loading = false;
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, _) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
      state.errors = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.errors = "Registration error try again";
      state.loading = false;
    });
    builder.addCase(signIn.pending, (state, _) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authenticated = true;
      state.loading = false;
      state.errors = null;
      state.authenticated = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.errors = "Connexion failed try again";
      console.log(action.error);
      state.loading = false;
      state.authenticated = false;
    });
    builder.addCase(signOut.pending, (state, _) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.user = null;
      state.loading = false;
      state.authenticated = false;
      state.errors = null;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.error;
      state.authenticated = false;
    });
  },
});

export const authSelector: (state: RootState) => AuthState = (
  state: RootState
) => state.auth;

export const isUserAuthenticatedSelector = createSelector(
  authSelector,
  (auth) => {
    return auth.authenticated;
  }
);

export const authLoading = createSelector(authSelector, (auth) => {
  return auth.loading;
});

export const authError = createSelector(authSelector, (auth) => {
  return auth.errors;
});
export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
