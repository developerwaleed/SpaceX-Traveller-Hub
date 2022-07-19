import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';
import missionReducer from './Missions/missions';

const store = configureStore({
  reducer: {
    myRockets: rocketReducer,
    mymissons: missionReducer,
  },
});

export default store;
