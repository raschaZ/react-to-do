import { ITodo } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../actions/todo";

export interface todoState {
  todo: ITodo[];
  todoAdded: string;
}

const initialState: todoState = {
  todo: [],
  todoAdded: "",
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    settodoAdd: (state, action) => {
      state.todoAdded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, { payload }: any) => {
      state.todo = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { settodoAdd } = todoSlice.actions;
export default todoSlice.reducer;
