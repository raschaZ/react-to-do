import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientApi } from "../../services/services";

// get tasks
export const getTasks = createAsyncThunk(
  "getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      clientApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await clientApi.get("/tasks");
      return response.data;
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
      const token = localStorage.getItem("token");
      clientApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const task = {
        title: value,
        description: value,
        completed: false,
      };
      const response = await clientApi.post("/tasks", task);
      return response.data;
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
      const token = localStorage.getItem("token");
      clientApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await clientApi.delete(`/tasks/${id}`);
      return response.data;
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
      const token = localStorage.getItem("token");
      clientApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await clientApi.put(`/tasks/${id}/complete`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
