import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missions';
import rocketReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mymissons: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
