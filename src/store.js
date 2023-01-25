import { configureStore } from "@reduxjs/toolkit";

import { firstStepReducer } from "./features/first-step/first-step-slice";
import { stepsCounterReducer } from "./features/steps-counter/steps-counter-slice";
import { planReducer } from "./features/plan/plan-slice";
import { addonsReducer } from "./features/addons/addons-slice";

const store = configureStore({
  reducer: {
    firstStep: firstStepReducer,
    stepsCounter: stepsCounterReducer,
    plan: planReducer,
    addons: addonsReducer,
  },
  devTools: true,
});

export { store };
