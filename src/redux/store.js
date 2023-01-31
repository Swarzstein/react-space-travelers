import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionReducer';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
