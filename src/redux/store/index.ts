import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todoSlice from "../slice/todo";
import authSlice from "../slice/auth";

const combinedReducer = combineReducers({
  todoSlice,
  authSlice,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
