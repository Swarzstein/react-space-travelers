import getRockets from '../../modules/rocketApi';

const GET_ROCKETS = 'space_travelers/rockets/GET_ROCKETS';

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKETS: return action.rockets;
    default: return state;
  }
}

export const getApiRockets = () => async (dispatch) => {
  const rockets = await getRockets();
  dispatch({
    type: GET_ROCKETS,
    rockets,
  });
};
