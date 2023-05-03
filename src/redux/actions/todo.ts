import { createAsyncThunk } from "@reduxjs/toolkit";

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
          title: value,
          description: value,
          completed: false,
        }),
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// delete task
export const deleteTask = createAsyncThunk(
  "tasks",
  async (id: any, { rejectWithValue }) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
      await fetch(`http://localhost:8010/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).catch((error) => console.error(error));
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// complete task
export const completeTask = createAsyncThunk(
  "tasks",
  async (id: any, { rejectWithValue }) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzAyMjYxMCwiZXhwIjoxNjgzNjI3NDEwfQ.5RspmxdIe1jAfY2vU0vm0zhogJCUaqpGsD4VsZnhGbc";
      await fetch(`http://localhost:8010/tasks/${id}/complete`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
