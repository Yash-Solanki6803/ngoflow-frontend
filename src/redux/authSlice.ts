import { LoginResponse, User } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Auth State
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

// Create Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // Save token to localStorage (optional)
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null; // Ensure token is cleared
      // Clear token from localStorage (optional)
      localStorage.removeItem("token");
    },
  },
});

// Export actions
export const { loginSuccess, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
