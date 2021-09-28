import { GET_CATEGORY } from "../consts";
const defaultState = {
  categories: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
