import { createSlice } from '@reduxjs/toolkit';

// const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

// const getMission = () => ({ type: GET_MISSIONS });

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    GET_MISSIONS: (action) => action.payload,
  },
});

export const missionFetch = async () => {
  try {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await res.json();
    const missionData = [];
    data.map((element) => {
      missionData.push({
        mission_id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
        status: false,
      });
      return missionData;
    });
  } catch (error) {
    throw new Error(error);
  }
};

missionFetch();

// eslint-disable-next-line no-console
console.log(123);

export default missionSlice.reducer;
