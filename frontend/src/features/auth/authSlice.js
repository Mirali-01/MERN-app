import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// running synchronously
// createSlice: accepts initial states, an object of reducer functions, and "slice" name

// async for registration
// createAsyncThunk: running asynchronous logic for fetchin API data, for every action there are state promises: pending, fulfilled, and rejected - taking control of promise actions and delaying computation to do the work later
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user, saves to localStorage
// takes a string value that has the action
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      // returning payload from register function
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    // returning payload from register function
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// synchronous for state updates
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Checking through 3 promise cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // action.payload takes the response from the backend = respose.data
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
