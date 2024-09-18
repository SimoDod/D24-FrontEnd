import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/loginThunk";
import { registerThunk } from "../thunks/registerThunk";
import { User } from "../../types/User";
import { fetchUserThunk } from "../thunks/fetchUserThunk";

type AuthState = {
  token: string | null;
  user: User | null;
  error: string | null | unknown;
  loading: boolean;
};

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // Login
    addCase(loginThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    });
    addCase(loginThunk.rejected, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Register
    addCase(registerThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(registerThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    });
    addCase(registerThunk.rejected, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch user data
    addCase(fetchUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(fetchUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    });
    addCase(
      fetchUserThunk.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export default authSlice.reducer;
