import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import logger from "redux-logger";

// npm i redux-logger

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})