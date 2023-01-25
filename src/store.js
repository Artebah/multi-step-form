import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { firstStepReducer } from "./features/first-step/first-step-slice";
import { stepsCounterReducer } from "./features/steps-counter/steps-counter-slice";
import { planReducer } from "./features/plan/plan-slice";
import { addonsReducer } from "./features/addons/addons-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  firstStep: firstStepReducer,
  stepsCounter: stepsCounterReducer,
  plan: planReducer,
  addons: addonsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
