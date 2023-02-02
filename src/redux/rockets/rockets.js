import getRockets from '../../modules/rocketApi';

const GET_ROCKETS = 'space_travelers/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space_travelers/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'space_travelers/rockets/CANCEL_ROCKET';

export default function rocketsReducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKETS: return action.rockets;
    case RESERVE_ROCKET: return state.map((element) => {
      if (element.id === action.id) return { ...element, reserved: true };
      return element;
    });
    case CANCEL_ROCKET: return state.map((element) => {
      if (element.id === action.id) return { ...element, reserved: false };
      return element;
    });
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

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});
