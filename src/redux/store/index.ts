import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todoSlice from "../slice/todo";

const combinedReducer = combineReducers({
  todoSlice,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
