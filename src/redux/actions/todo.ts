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
// create task
export const createTask = createAsyncThunk(
  "tasks",
  async (value: any, { rejectWithValue }) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
      await fetch("http://localhost:8010/tasks", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: value.title,
          description: value.title,
          completed: value.completed,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
      displayTodoList();
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
