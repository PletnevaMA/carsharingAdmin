import { carActions } from "../consts";
const defaultState = {
  cars: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case carActions.GET_CARS:
      return {
        ...state,
        cars: payload,
      };

    default:
      return state;
  }
};
