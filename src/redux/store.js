import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionReducer';

const store = configureStore({
  reducer: {
    missionReducer,
  },
});

export default store;
