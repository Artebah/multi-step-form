import { configureStore } from "@reduxjs/toolkit";

import { firstStepReducer } from "./features/first-step/first-step-slice";
import { stepsCounterReducer } from "./features/steps-counter/steps-counter-slice";
import { planReducer } from "./features/plan/plan-slice";

const store = configureStore({
  reducer: {
    firstStep: firstStepReducer,
    stepsCounter: stepsCounterReducer,
    plan: planReducer,
  },
  devTools: true,
});

export { store };
