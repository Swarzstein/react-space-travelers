import getMissions from '../modules/missionsApi';

const GET_MISSIONS = 'GET_MISSIONS';
export const JOIN_MISSIONS = 'JOIN_MISSIONS';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return action.payload;
    case JOIN_MISSIONS: return state.map((el) => {
      if (el.mission_id === action.payload) {
        const newState = { ...el, reserved: !el.reserved };
        return newState;
      }
      return el;
    });
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
