import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    myRockets: rocketReducer,
  },
});

export default store;
