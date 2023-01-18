import { configureStore } from "@reduxjs/toolkit";

import { firstStepReducer } from "./features/first-step/first-step-slice";

const store = configureStore({
  reducer: {
    firstStep: firstStepReducer,
  },
  devTools: true,
});

export { store };
