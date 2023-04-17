import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// createSlice => "name",
export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = workoutSlice.actions;
export default workoutSlice.reducer;
