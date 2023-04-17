import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import workoutService from "./workoutService";

const initialState = {
  workouts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new workout
export const createWorkout = createAsyncThunk(
  "workouts/create",
  async (workoutData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await workoutService.createWorkout(workoutData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// createSlice => "name",
export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWorkout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createWorkout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workouts.push(action.payload);
      })
      .addCase(createWorkout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = workoutSlice.actions;
export default workoutSlice.reducer;
