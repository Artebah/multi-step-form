import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: "arcade",
  planType: "monthly",
};

const planSlice = createSlice({
  name: "@@plan",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setPlanType: (state, action) => {
      state.planType = action.payload;
    },
  },
});

export const { setPlan, setPlanType } = planSlice.actions;
export const planReducer = planSlice.reducer;
export const selectPlan = (state) => state.plan;
