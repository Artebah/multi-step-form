import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addonsSlice = createSlice({
  name: "@@addons",
  initialState,
  reducers: {
    addAddon: (state, action) => {
      state.push(action.payload);
    },
    removeAddon: (state, { payload }) => {
      console.log(payload);
      const id = payload.id;

      return state.filter((addon) => addon.id !== id);
    },
  },
});

export const { addAddon, removeAddon } = addonsSlice.actions;
export const addonsReducer = addonsSlice.reducer;

export const selectAddons = (state) => state.addons;
