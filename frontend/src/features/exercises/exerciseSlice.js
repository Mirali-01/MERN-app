import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exerciseService from "./exerciseService";

const initialState = {
  exercise: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new exercise
export const createExercise = createAsyncThunk(
  "exercise/create",
  async (exerciseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await exerciseService.createExercise(exerciseData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all exercises
export const getExercises = createAsyncThunk(
  "exercise/getExercises",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await exerciseService.getExercises(token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete exercise
export const deleteExercise = createAsyncThunk(
  "exercise/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await exerciseService.deleteExercise(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// createSlice => "name", initialStates, reducers and extraReducers for promise cases
export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExercise.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.exercise.push(action.payload);
      })
      .addCase(createExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getExercises.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.exercise = action.payload;
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteExercise.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.exercise = state.exercise.filter((exercise) => {
          return exercise._id !== action.payload._id;
        });
      })
      .addCase(deleteExercise.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = exerciseSlice.actions;
export default exerciseSlice.reducer;
