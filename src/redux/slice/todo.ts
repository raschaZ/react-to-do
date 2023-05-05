import { ITodo } from "../../types/todo";
import { createSlice } from "@reduxjs/toolkit";
import {
  completeTask,
  createTask,
  deleteTask,
  getTasks,
} from "../actions/todo";

export interface todoState {
  todo: ITodo[];
  loading: boolean;
  error: string | null;
  success: boolean;
  todoAdded: string;
}

const initialState: todoState = {
  todo: [],
  todoAdded: "",
  loading: false,
  error: null,
  success: false,
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
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTasks.fulfilled, (state, { payload }: any) => {
      state.todo = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getTasks.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createTask.fulfilled, (state, { payload }: any) => {
      state.todo = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createTask.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload }: any) => {
      state.todo = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteTask.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(completeTask.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(completeTask.fulfilled, (state, { payload }: any) => {
      state.todo = payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(completeTask.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { settodoAdd } = todoSlice.actions;
export default todoSlice.reducer;
