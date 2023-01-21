import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const stepsCounterSlice = createSlice({
  name: "@steps-counter",
  initialState,
  reducers: {
    incStep: (state) => {
      return state + 1;
    },
    decStep: (state) => {
      return state - 1;
    },
    resetStep: () => {
      return initialState;
    },
  },
});

export const { incStep, decStep, resetStep } = stepsCounterSlice.actions;
export const stepsCounterReducer = stepsCounterSlice.reducer;
export const selectStepsCounter = (state) => state.stepsCounter;
