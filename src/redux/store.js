import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missionSlice';

const store = configureStore({
  reducer: {
    missionSlice,
  },
});

export default store;
