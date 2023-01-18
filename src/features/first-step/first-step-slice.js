import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: {
    value: "",
    requiredAlert: false,
  },
  email: {
    value: "",
    requiredAlert: false,
  },
  phone: {
    value: "",
    requiredAlert: false,
  },
};

const firstStepSlice = createSlice({
  name: "@@first-step",
  initialState,
  reducers: {
    addInputValue: (state, { payload: { name, value } }) => {
      state[name].value = value;
    },
    addInputAlert: (state, { payload: { name, requiredAlert } }) => {
      state[name].requiredAlert = requiredAlert;
    },
  },
});

export const { addInputValue, addInputAlert } = firstStepSlice.actions;
export const firstStepReducer = firstStepSlice.reducer;

export const selectFirstStepValues = (state) => state.firstStep;
