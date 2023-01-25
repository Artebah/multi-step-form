import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addonsSlice = createSlice({
  name: "@@addons",
  initialState,
  reducers: {
    addAddon: (state, action) => {
      state.push(action.payload);
    },
    removeAddon: (state, action) => {
      const id = action.payload;

      return state.filter((addon) => addon.id !== id);
    },
    changeAddonsPrice: (state, { payload: { addonsInfo, planType } }) => {
      state.forEach((addon) => {
        const addonInfo = addonsInfo.find((addonInfo) => addonInfo.id === addon.id);

        const price =
          planType === "monthly" ? addonInfo.monthlyPrice : addonInfo.yearlyPrice;

        addon.price = price;
      });
    },
  },
});

export const { addAddon, removeAddon, changeAddonsPrice } = addonsSlice.actions;
export const addonsReducer = addonsSlice.reducer;

export const selectAddons = (state) => state.addons;
