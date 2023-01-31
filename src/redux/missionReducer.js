import getMissions from '../modules/missionsApi';

const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return action.payload;
    default: return state;
  }
};

export const missionFetch = () => async (dispatch) => {
  try {
    const missionList = await getMissions();
    dispatch({ type: GET_MISSIONS, payload: missionList });
  } catch (error) {
    throw new Error(error);
  }
};

export default missionReducer;
