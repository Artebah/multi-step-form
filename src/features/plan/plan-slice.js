import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planName: "arcade",
  planType: "monthly",
  planPrice: "$9/mo",
};

const planSlice = createSlice({
  name: "@@plan",
  initialState,
  reducers: {
    setPlanName: (state, action) => {
      state.planName = action.payload;
    },
    setPlanType: (state, action) => {
      state.planType = action.payload;
    },
    setPlanPrice: (state, action) => {
      state.planPrice = action.payload;
    },
  },
});

export const { setPlanName, setPlanType, setPlanPrice } = planSlice.actions;
export const planReducer = planSlice.reducer;
export const selectPlan = (state) => state.plan;
