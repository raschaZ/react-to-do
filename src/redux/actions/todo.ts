import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayTodoList } from "../../services/services";

// get tasks
export const getTasks = createAsyncThunk(
  "tasks",
  async (_, { rejectWithValue }) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
      const myHeaders = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      });
      const response = await fetch("http://localhost:8010/tasks", {
        method: "GET",
        credentials: "include",
        headers: myHeaders,
      });
      const tasks = await response.json();
      return tasks;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
