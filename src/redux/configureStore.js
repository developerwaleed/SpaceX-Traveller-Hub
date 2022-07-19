import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    myRockets: rocketReducer,
  },
});

export default store;
