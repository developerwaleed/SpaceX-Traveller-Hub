import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [
    {
      id: 1,
      mission_name: 'mission1',
      description: 'this is misson 1',
      misson_status: 'Status 1',
    },
    {
      id: 2,
      mission_name: 'mission2',
      description: 'this is mission 2',
      misson_status: 'Status 2',
    },
    {
      id: 3,
      mission_name: 'mission',
      description: 'this is mission 3',
      misson_status: 'Status 3',
    },
  ],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
