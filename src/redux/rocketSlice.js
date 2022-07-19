import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [
    {
      id: 1, rocket_name: 'falcon1', description: 'this is rocket 1', flickr_images: 'image goes here',
    },
    {
      id: 2, rocket_name: 'falcon2', description: 'this is rocket 2', flickr_images: 'image goes here',
    },
    {
      id: 3, rocket_name: 'falcon3', description: 'this is rocket 3', flickr_images: 'image goes here',
    },
  ],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketSlice.reducer;
