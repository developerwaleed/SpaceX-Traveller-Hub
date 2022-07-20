/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  },
);
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.loading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    },
    [fetchMissions.pending]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
  },
});

export default missionSlice.reducer;
