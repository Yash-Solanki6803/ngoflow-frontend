import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user type
export enum UserRole {
  Volunteer = "volunteer",
  Ngo = "ngo",
  Dev = "dev",
}

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  interestedCategories: { id: number; name: string }[];
  interestedSubcategories: { id: number; name: string }[];
}

// Define the Auth State
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

// Create Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

// Export actions
export const { loginSuccess, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
