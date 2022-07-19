import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missions';
import rocketReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    myRockets: rocketReducer,
    mymissons: missionReducer,
  },
});

export default store;
