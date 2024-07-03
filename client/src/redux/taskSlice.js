import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Adjust base URL as per your setup

export const fetchTasks = createAsyncThunk(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await axios.get(`${baseURL}/task/getAllTasks`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async ({ task }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await axios.post(
        `${baseURL}/task/addTask`,
        { task },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await axios.put(`${baseURL}/task/updateTask/${task._id}`, task, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      await axios.delete(`${baseURL}/task/deleteTask/${taskId}`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      return taskId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        state.tasks[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state, action) => {
        // Optimistically remove the task from the state
        state.tasks = state.tasks.filter((task) => task._id !== action.meta.arg);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        // Task is already removed in the pending state
      })
      .addCase(deleteTask.rejected, (state, action) => {
        // Revert the state if deletion fails
        state.error = action.payload;
        state.tasks = [...state.tasks, action.meta.arg];
      });
  },
});

export default taskSlice.reducer;
