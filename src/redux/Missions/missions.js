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
    console.log('api called');
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  },
);
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserve(state, action) {
      const newState = state.missions.map((item) => {
        if (item.mission_id === action.payload.id) {
          return { ...item, reserved: action.payload.reserved };
        }
        return item;
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.loading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.loading = false;
      const newState = action.payload.map((item) => ({
        ...item,
        reserved: false,
      }));

      state.missions = newState;
    },
    [fetchMissions.pending]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
  },
});

export const { reserve } = missionSlice.actions;

export default missionSlice.reducer;
