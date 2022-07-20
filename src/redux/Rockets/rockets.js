import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  },
);
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  // reducers: {
  // reserveRocket: (state, { payload }) => {
  //   const newState = state.rockets.map((rocket) => {
  //     if (rocket.id !== payload) return rocket;
  //     return { ...rocket, reserved: true };
  //   });
  //   return newState;
  // },
  // },
  reducers: {
    reserveRocket(state, action) {
      const newState = state.rockets.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, reserved: action.payload.reserved };
        }
        return item;
      });
      return { ...state, rockets: newState };
    },
  },

  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.loading = true;
    },
    [fetchRockets.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const newState = payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserved: false,
      }));
      state.rockets = newState;
      state.error = '';
    },
    [fetchRockets.pending]: (state) => {
      state.loading = false;
      state.error = 'error occured';
    },
  },
});

export default rocketSlice.reducer;
export const { reserveRocket } = rocketSlice.actions;
