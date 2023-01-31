const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

const getMission = () => ({ type: GET_MISSIONS });

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return { ...state, loading: true };
    default: return state;
  }
};

export const missionFetch = async (dispatch) => {
  dispatch(getMission());
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

export default missionReducer;
