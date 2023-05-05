import { createAsyncThunk } from "@reduxjs/toolkit";

// get tasks
export const getTasks = createAsyncThunk(
  "getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // set token value in local storage
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
  "createTask",
  async (value: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // set token value in local storage
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
  "deleteTask",
  async (id: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // set token value in local storage
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
  "completeTask",
  async (id: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // set token value in local storage
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
