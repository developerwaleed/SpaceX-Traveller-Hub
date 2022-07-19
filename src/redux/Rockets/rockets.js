import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      /* eslint-disable no-param-reassign */
      state.loading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [fetchRockets.pending]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
  },
});

export default rocketSlice.reducer;
