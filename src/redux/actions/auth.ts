import { createAsyncThunk } from "@reduxjs/toolkit";

// login
export const login = createAsyncThunk(
  "login",
  async (data: any, { rejectWithValue }) => {
    try {
      const email = data.email;
      const password = data.password;

      const response = await fetch("http://localhost:8010/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        response
          .json()
          .then((data) => {
            const token = data.token;
            localStorage.setItem("token", token); // set token value in local storage
          })
          .catch((error) => {
            console.error("There was a problem parsing the JSON data:", error);
          });
        console.log("Logged in successfully");

        window.location.href = "/";
        return data;
      } else {
        console.log(`Response status code: ${response.status}`);
      }
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data: any, { rejectWithValue }) => {
    try {
      const name = data.firstName;
      const email = data.email;
      const password = data.password;

      const response = await fetch("http://localhost:8010/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 200) {
        response
          .json()
          .then((data) => {
            const token = data.token;
            localStorage.setItem("token", token); // set token value in local storage
          })
          .catch((error) => {
            console.error("There was a problem parsing the JSON data:", error);
          });
        console.log("Logged in successfully");

        window.location.href = "/login";
        return data;
      } else {
        console.log(`Response status code: ${response.status}`);
      }
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
