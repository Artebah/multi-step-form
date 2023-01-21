import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: {
    value: "",
    requiredAlert: false,
    requiredAlertMessage: "This field is required",
  },
  email: {
    value: "",
    requiredAlert: false,
    requiredAlertMessage: "This field is required",
  },
  phone: {
    value: "",
    requiredAlert: false,
    requiredAlertMessage: "This field is required",
  },
};

const firstStepSlice = createSlice({
  name: "@@first-step",
  initialState,
  reducers: {
    addInputValue: (state, { payload: { name, value } }) => {
      state[name].value = value;
    },
    addInputAlert: (
      state,
      {
        payload: { name, requiredAlert, requiredAlertMessage = "This field is required" },
      }
    ) => {
      state[name].requiredAlertMessage = requiredAlertMessage;
      state[name].requiredAlert = requiredAlert;
    },
  },
});

export const { addInputValue, addInputAlert } = firstStepSlice.actions;
export const firstStepReducer = firstStepSlice.reducer;

export const selectFirstStepValues = (state) => state.firstStep;
