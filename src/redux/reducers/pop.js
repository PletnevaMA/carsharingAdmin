import { popActions } from "../consts";

const defaultState = {
  pop: false,
  popCreate: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case popActions.SET_POP:
      return {
        ...state,
        pop: payload,
      };
    case popActions.SET_POP_CREATE:
      return {
        ...state,
        popCreate: payload,
      };
    default:
      return state;
  }
};
